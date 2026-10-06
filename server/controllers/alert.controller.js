import { getAll, getAlertById, createNewAlert, removeAlert, updateAlertById } from "../services/alert.service.js";

export const getAlert = async (req, res) => {
    const id = req.params.id
    const user = req.user
    const alert = await getAlertById(id, user)
    res.json({ alert })
}

export const getAllAlerts = async (req, res) => {
    const user = req.user
    const alerts = await getAll(user)
    res.json({ alerts })
}

export const createAlert = async (req, res) => {
    const alert = req.body.alert
    const user = req.user
    const newAlert = await createNewAlert(alert, user)
    res.status(201).json({ alert: newAlert })
}

export const deleteAlert = async (req, res) => {
    const id = req.params.id
    const user = req.user
    await removeAlert(id, user)
    res.json({ message: `alert ${id} deleted` })
}

export const updateAlert = async (req, res) => {
    const id = req.params.id
    const alertUpdates = req.body.updates
    const user = req.user
    const updated = await updateAlertById(id, alertUpdates, user)
    res.json({ alert: updated })
}