import { getAll, getAlertById } from "../services/alert.service.js";

export const getAlert = async (req, res) => {
    const id = req.params.id
    const alert = await getAlertById(id)
    res.json({ alert })
}

export const getAllAlerts = async (req, res) => {
    const alerts = await getAll()
    res.json({ alerts })
}