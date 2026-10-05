import mongoose, { Schema } from "mongoose";

const alertSchema = new Schema({
    displayName: String,
    description: String,
    priority: String,
    arena: String,
    status: String,
    lon: Number,
    lat: Number
})

export const Alert = mongoose.model("Alert", alertSchema)