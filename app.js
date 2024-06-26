import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {dbconnections} from "./database/dbconnections.js";
import { errormiddleware } from "../middlewares/error.js";


const app=express();
dotenv.config({path:"./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST", "GET", "PUT", "DELETE"],
    credentials:true,
}));

app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbconnections();
app.use(errormiddleware)
export default app;