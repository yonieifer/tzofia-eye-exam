import { findById } from "../DAL/alert.dal.js";

export const getAlertById = async (id) => {
    const alert = await findById(id)
    if (!alert) {
        throw {message: `alert ${id} not found`, status: 404}
    }
    return alert
}
