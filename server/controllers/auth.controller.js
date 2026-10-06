import { createUser, loginUser, removeUser, findUser, findAllUsers } from "../services/user.service.js"

export const register = async (req, res) => {
    const user = req.user
    await createUser(user)
    res.status(201).json({ message: "User registered successfully" })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const { payload, token } = await loginUser(email, password)
    res.status(201).json({ user: payload, token })
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    await removeUser(id)
    res.json({ message: `User ${id} deleted successfully` })
}

export const getUser = async (req, res) => {
    const user = req.user
    const userToReturn = await findUser(user)
    res.json({ user: userToReturn })
}

export const getAllUsers = async (req, res) => {
    const allUsers = await findAllUsers()
    res.json({ users: allUsers })
}
