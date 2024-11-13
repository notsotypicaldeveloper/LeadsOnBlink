import jwt from 'jsonwebtoken';


interface JWTPayload {
    email: string,
    _id: string
}
export function createJWTToken(payload: JWTPayload) {
    try {
        return jwt.sign(payload, process.env.JWT_SECRET_KEY || "", {expiresIn: "30d"})
    }
    catch(e) {

    }
}