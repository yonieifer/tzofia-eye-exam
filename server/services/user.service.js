import bcrypt from "bcryptjs"
import { findByEmail, create } from "../DAL/user.dal.js"
import generateToken from "../utils/generateToken"

export const createUser = async (user) => {
    const userExsit = await findByEmail(user.email)
    if (userExsit) {
        throw { message: `user ${id} already exsist`, status: 409 }
    }
    const hashedPassword = await bcrypt.hash(user.password, 12)
    const newUser = await create({ ...user, password: hashedPassword })
    const { password, ...userToReturn } = newUser
    const payload = {
        email: user.email,
        username: user.username,
        role: user.role,
        assignedArena: user.assignedArena,
    }
    const token = generateToken(payload)
    return { newUser, token }
}