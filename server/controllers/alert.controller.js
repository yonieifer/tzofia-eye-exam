import { getAll, getAlertById, createNewAlert, removeAlert } from "../services/alert.service.js";

export const getAlert = async (req, res) => {
    const id = req.params.id
    const alert = await getAlertById(id)
    res.json({ alert })
}

export const getAllAlerts = async (req, res) => {
    const alerts = await getAll()
    res.json({ alerts })
}

export const createAlert = async (req, res) => {
    const alert = req.body.alert
    const newAlert = await createNewAlert(alert)
    res.status(201).json({ alert: newAlert })
}

export const deleteAlert = async (req, res) => {
    const id = req.params.id
    await removeAlert(id)
    res.json({ message: `alert ${id} deleted` })
}