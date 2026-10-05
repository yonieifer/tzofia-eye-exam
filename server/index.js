import express from "express"
import { connectDB } from "./config/db.js"

const app = express()

await connectDB()

app.use(express.json())

app.listen(process.env.PORT, () => { console.log(`Server is up and running on port ${process.env.PORT}`) })