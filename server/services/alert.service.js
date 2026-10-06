import { create, findAll, findById, remove, update } from "../DAL/alert.dal.js";

export const getAll = async (user) => {
    const alerts = await findAll()
    if (user.role === "arena_user") {
        const arenaAlerts = alerts.filter(alert => alert.arena === user.arena)
        return arenaAlerts
    }
    return alerts
}

export const getAlertById = async (id, user) => {
    const alert = await findById(id)
    if (!alert) {
        throw { message: `alert ${id} not found`, status: 404 }
    }
    if (user.role === "arena_user" && user.assignedArena !== alert.arena) {
        throw { message: `alert ${id} it is not in your arena`, status: 403 }
    }
    return alert
}

export const createNewAlert = async (alert, user) => {
    if (user.role === "arena_user" && user.assignedArena !== alert.arena) {
        throw { message: `arena ${alert.arena} it is not your arena`, status: 403 }
    }
    const newAlert = await create(alert)
    return newAlert
}

export const removeAlert = async (id, user) => {
    const alert = await findById(id)
    if (!alert) {
        throw { message: `alert ${id} not found`, status: 404 }
    }
    if (user.role === "arena_user" && user.assignedArena !== alert.arena) {
        throw { message: `alert ${id} it is not in your arena`, status: 403 }
    }
    const isDeleted = await remove(id)
    if (!isDeleted) {
        throw { message: `can not delete alert ${id}`, status: 500 }
    }
    return isDeleted
}

export const updateAlertById = async (id, alertUpdates, user) => {
    const alert = await findById(id)
    if (!alert) {
        throw { message: `alert ${id} not found`, status: 404 }
    }
    if (user.role === "arena_user" && user.assignedArena !== alert.arena) {
        throw { message: `alert ${id} it is not in your arena`, status: 403 }
    }
    const updated = await update(id, alertUpdates)
    if (!updated) {
        throw { message: `can not update alert ${id}`, status: 500 }
    }
    return updated
}