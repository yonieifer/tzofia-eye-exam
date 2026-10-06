import express from "express"
import { deleteUser, getAllUsers, getUser, login, register } from "../controllers/auth.controller.js"
import authAdmin from "../middlewares/authAdmin.js"
import authenticateJWT from "../middlewares/authenticateJWT .js"

const router = express.Router()

router.post("/register", authenticateJWT, authAdmin, register)
router.get("/users", authenticateJWT, authAdmin, getAllUsers)
router.delete("/users/:id", authenticateJWT, authAdmin, deleteUser)
router.post("/login", login)
router.get("/me", authenticateJWT, getUser)

export default router