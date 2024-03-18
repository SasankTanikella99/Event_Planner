import express from 'express';
import { dbconnect } from './Database/dbconnect.js';
import dotenv from 'dotenv'
import messageRouter from './router/MessageRouter.js'
import cors from 'cors'
const app = express();
dotenv.config({
    path: "./config/config.env"
})

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['POST'],
    credentials: true
}))


//Route
app.use("/api/message", messageRouter)

dbconnect();
export default app