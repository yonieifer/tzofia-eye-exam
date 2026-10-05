import { getAlertById } from "../services/alert.service.js";

export const getAlert = async (req, res) => {
    const id = req.params.id
    const alert = await getAlertById(id)
    res.json({ alert })
}