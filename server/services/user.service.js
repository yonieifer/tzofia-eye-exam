import bcrypt from "bcryptjs"
import { findByEmail, create, remove, getAllUsers } from "../DAL/user.dal.js"
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
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
        assignedArena: newUser.assignedArena,
    }
    const token = generateToken(payload)
    return { userToReturn, token }
}

export const loginUser = async (email, password) => {
    const user = await findByEmail(email)
    if (!user) {
        throw { message: `user ${id} not registered`, status: 404 }
    }
    const isCorrectPasword = await bcrypt.compare(password, user.password)
    if (!isCorrectPasword) {
        throw { message: `password incorrect`, status: 400 }
    }
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        assignedArena: user.assignedArena
    }
    const token = generateToken(payload)
    return token
}

export const removeUser = async (id) => {
    const isDeleted = await remove(id)
    if (!isDeleted) {
        throw { message: `user ${id} not registered`, status: 404 }
    }
    return isDeleted
}

export const findUser = async (user) => {
    const user = await findByEmail(user.email)
    if (!user) {
        throw { message: `user ${id} not registered`, status: 404 }
    }
    const { password, ...userToReturn } = user
    return userToReturn
}

export const findAllUsers = async () => {
    const allUsers = await getAllUsers()
    const saveUsers = allUsers.map(user => {
        const { password, ...userData } = user
        return userData
    })
    return allUsers
}


