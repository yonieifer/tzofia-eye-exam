import { findAll, findById } from "../DAL/alert.dal.js";

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
