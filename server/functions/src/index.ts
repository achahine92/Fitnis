import express from "express"
import { onRequest } from "firebase-functions/v2/https"
import cors from "cors"

import exerciseRouter from "./routes/exerciseRouter"
import secretsRouter from "./routes/secretsRouter"
import establishConnection from "./middleware/establishConnection"
import checkAuth from "./middleware/auth"
const app = express()

app.use(cors({ origin: true }))
app.use(express.json())
app.use(establishConnection)
app.use("/exercises", exerciseRouter)
app.use("/secret", checkAuth, secretsRouter)

export const api = onRequest(app)
