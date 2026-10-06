import jwt from "jsonwebtoken"

export default (payload) => { 
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token
}