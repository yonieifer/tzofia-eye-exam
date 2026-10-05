import { Alert } from "../models/alert.js";

export const findById = async (id) => {
    const alert = await Alert.findById(id)
    return alert
}
