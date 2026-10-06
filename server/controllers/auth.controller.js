import { createUser, loginUser, removeUser, findUser, findAllUsers } from "../services/user.service.js"

export const register = async (req, res) => {
    const { user } = req.body
    const { userToReturn, token } = await createUser(user)
    res.status(201).json({ user: newUser, token })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const token = await loginUser(email, password)
    res.status(201).json(token)
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    await removeUser(id)
    res.json({ message: `user ${id} deleted` })
}

export const getUser = async (req, res) => {
    const { user } = req.body
    const userToReturn = await findUser(user)
    res.json({ user: userToReturn })
}

export const getAllUsers = async (req, res) => {
    const allUsers = await findAllUsers()
    res.json({ users: allUsers })
}