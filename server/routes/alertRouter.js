import express from "express";
import { getAlert, getAllAlerts } from "../controllers/alert.controller.js";

const router = express.Router()

router.get(`/:id`, getAlert)
router.get("", getAllAlerts)

export default router