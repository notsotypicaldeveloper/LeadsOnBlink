import { usersModel } from "../models/user-model";

export async function register(req: Express.Request, res: any) {
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

        const userCreationResult = await usersModel.create({name, email, password});

        return res.status(200).json({message: "You are registered successfully!", data: userCreationResult})
    }
    catch(e) {
        return res.status(500).json({message: "Internal Server Error!", data: {}})

    }
}