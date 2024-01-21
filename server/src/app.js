import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "10mb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from './routes/user.routes.js'
import blogRouter from './routes/blog.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/blogs", blogRouter)

export { app }