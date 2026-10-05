import express from "express";
import { createAlert, getAlert, getAllAlerts } from "../controllers/alert.controller.js";
import validateBody from "../middlewares/validateBody.js";
import alertSchema from "../validation/alertSchema.js";

const router = express.Router()

router.get(`/:id`, getAlert)
router.get("", getAllAlerts)
router.post("", validateBody(alertSchema), createAlert)

export default router