import { Alert } from "../models/alert.js";

export const findAll = async () => {
    const alerts = await Alert.find()
    return alerts
}

export const findById = async (id) => {
    const alert = await Alert.findById(id)
    return alert
}
