import express from "express"
import { deleteUser, getUser, login, register } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.delete("/users/:id", deleteUser)
router.get("/me", getUser)

export default router