import express from "express"
import { createUser } from "../services/user.service.js

const router = express.Router()

router.post("/register", async (req, res) => {
    const { user } = req.body
    const { newUser, token } = await createUser(user)
    res.status(201).json({ user: newUser, token })
})