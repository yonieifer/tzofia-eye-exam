import express from "express";
import { createAlert, getAlert, getAllAlerts } from "../controllers/alert.controller.js";

const router = express.Router()

router.get(`/:id`, getAlert)
router.get("", getAllAlerts)
router.post("", createAlert)

export default router