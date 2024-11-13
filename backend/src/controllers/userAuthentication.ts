import { createJWTToken } from "../jwtUtil";
import { usersModel } from "../models/user-model";
import bcrypt from "bcrypt";

const SALT_ROUND = 5;
export async function register(req: Express.Request, res: any, next: any) {
    try 
    {
        const { name, email, password } = (req as any).body;
  
        if (!name || !email || !password) {
            res.status(400).send({message: "name, email or password are missing!", data: {}});
            return;
        }
        
        const userExist = await usersModel.findOne({email: email});

        console.log("userExist = ", userExist);

        if(userExist) {
            return res.status(400).json({message: "Email already exists!", data: {}})
        }

        const hash_password = await bcrypt.hash(password, SALT_ROUND);
        const userCreationResult = await usersModel.create({name, email, password: hash_password});

        return res.status(201).json({message: "You are registered successfully!", data: {
            token: createJWTToken({email: email, _id: userCreationResult._id.toString()}),
        }})
    }
    catch(e) {
        console.log("e = ", e);
        // return res.status(500).json({message: "Internal Server Error!", data: e})
        next(e);
    }
}

export async function login(req: Express.Request, res: any) {
    try 
    {
        const { email, password } = (req as any).body;
        
        if (!email || !password) {
            res.status(400).send({message: "email or password are missing!", data: {}});
            return;
        }

        const userExist =  await usersModel.findOne({email});
        if(!userExist) {
            // Here, donot give message like email not found, as it help hacker/ 3rd person to know,
            // if someone have registered
            return res.status(400).json({message: "Invalid Credentials", data: {}})
        }

        const doesPasswordMatches = await bcrypt.compare(password, userExist.password);

        if(doesPasswordMatches) {
            return res.status(200).json({message: "Login successfully!", data: {
                token: createJWTToken({email: email, _id: userExist._id.toString()}),
            }})
        }
        else {
            // never tell if email wrong or password
            return res.status(400).json({message: "Invalid Credentials", data: {}})
        }

    }
    catch(e) {
        console.log("e = ", e);
        return res.status(500).json({message: "Internal Server Error!", data: e})

    }
}
