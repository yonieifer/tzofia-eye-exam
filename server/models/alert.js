import mongoose, { Schema } from "mongoose";

const alertSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High", "Critical"],
    },
    arena: {
        type: String,
        required: true,
        enum: ["North", "South", "Center"],
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Handled"],
    },
    lon: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    }
})

export const Alert = mongoose.model("Alert", alertSchema)