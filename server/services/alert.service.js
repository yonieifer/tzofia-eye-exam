import { create, findAll, findById, remove, update } from "../DAL/alert.dal.js";

export const getAll = async () => {
    const alerts = await findAll()
    return alerts
}

export const getAlertById = async (id) => {
    const alert = await findById(id)
    if (!alert) {
        throw { message: `alert ${id} not found`, status: 404 }
    }
    return alert
}

export const createNewAlert = async (alert) => {
    const newAlert = await create(alert)
    return newAlert
}

export const removeAlert = async (id) => {
    const isDeleted = await remove(id)
    if (!isDeleted) {
        throw {message: `alert ${id} not found`, status: 404 }
    }
    return isDeleted
}

export const updateAlertById = async (id, alertUpdates) => {
    const updated = await update(id, alertUpdates)
    if (!updated) {
        throw {message: `alert ${id} not found`, status: 404 }
    }
    return updated
}