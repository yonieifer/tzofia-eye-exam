import express from "express";
import { createAlert, deleteAlert, getAlert, getAllAlerts, updateAlert } from "../controllers/alert.controller.js";
import validateBody from "../middlewares/validateBody.js";
import alertSchema from "../validation/alertSchema.js";

const router = express.Router()

router.get("/:id", getAlert)
router.get("", getAllAlerts)
router.post("", validateBody("alert", alertSchema), createAlert)
router.delete("/:id", deleteAlert)
router.put("/:id", validateBody("updates", alertSchema.partial()), updateAlert)

export default router
