import express from "express";
import dotenv from "dotenv";
import allroutes from "./routes/index.js"
import mongoose from "mongoose"
import ConnectDB from "./config/index.js";

dotenv.config();

ConnectDB()
const app = express();
app.use(express.json())
app.use("/", allroutes);

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
    res.send(`<h1>Server is running on Port ${process.env.PORT}</h1>`);
});