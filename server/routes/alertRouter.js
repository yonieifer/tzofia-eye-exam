import express from "express";
import { getAlert } from "../controllers/alert.controller.js";

const router = express.Router()

router.get(`/:id`, getAlert)

export default router