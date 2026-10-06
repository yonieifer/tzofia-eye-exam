import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High", "Critical"],
    },
    role: {
        type: String,
        required: true,
        enum: ["arena_user", "general_user", "admin"],
    },
    assignedArena: {
        type: String,
        required: true,
        enum: ["North", "South", "Center", "All"],
    }
})

export const User = mongoose.model("User", userSchema)