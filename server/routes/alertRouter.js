import express from "express";
import { createAlert, deleteAlert, getAlert, getAllAlerts, updateAlert } from "../controllers/alert.controller.js";
import validateBody from "../middlewares/validateBody.js";
import alertSchema from "../validation/alertSchema.js";
import authenticateJWT from "../middlewares/authenticateJWT .js";

const router = express.Router()

router.get("/:id", authenticateJWT, getAlert)
router.get("", authenticateJWT, getAllAlerts)
router.post("", authenticateJWT, validateBody("alert", alertSchema), createAlert)
router.delete("/:id", authenticateJWT, deleteAlert)
router.put("/:id", authenticateJWT, validateBody("updates", alertSchema.partial()), updateAlert)

export default router
