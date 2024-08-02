import e from "express";
import dotenv from "dotenv";
dotenv.config({path:'./config/config.env'});
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import applicationRouter from "./routs/applicationRouter.js";
import jobRouter from "./routs/jobRouter.js";
import userRouter from "./routs/userRouter.js";
import {dbConnection} from './database/dbConnection.js'
import {errorMiddleware} from './middlewares/error.js'


const app = e();

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
}));

app.use(cookieParser());
app.use(e.json());
app.use(e.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/temp",
}));

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter); 

dbConnection();

app.use(errorMiddleware);
export default app;
