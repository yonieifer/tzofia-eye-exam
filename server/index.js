import express from "express"
import { connectDB } from "./config/db.js"
import alertRouter from "./routes/alertRouter.js"
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

await connectDB()

app.use(express.json())
app.use("/api/alerts", alertRouter)
app.use(errorHandler)

app.listen(process.env.PORT, () => { console.log(`Server is up and running on port ${process.env.PORT}`) })