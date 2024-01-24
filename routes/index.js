import express from "express"
import authroute from "../controllers/auth/auth.route.js"

const app=express();


app.use("/auth",authroute)

export default app