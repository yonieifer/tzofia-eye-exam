import { createUser, loginUser } from "../services/user.service.js"

export const register = async (req, res) => {
    const { user } = req.body
    const { newUser, token } = await createUser(user)
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