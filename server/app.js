import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import db from "./src/config/dbconfig.js";
import mainRouter from "./src/routes/mainRouter.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)
db();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', mainRouter);

export default app;
