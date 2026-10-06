import { User } from "../models/user.js";

export const create = async (user) => {
    const newUser = await User.insertOne(user)
    return newUser
}

export const remove = async (id) => {
    const result = await User.deleteOne({ _id: id })
    return result.deletedCount > 0
}

export const getAllUsers = async () => {
    const users = await User.find()
    return users
}

export const findById = async (id) => {
    const user = await User.findById(id)
    return user
}

export const findByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user
}