import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js';
import { errorMiddleware } from './middlewares/error.js';
import userRouter from './router/userRouter.js';
import fileUpload from 'express-fileupload';
import appointmentRouter from './router/appointmentRouter.js';

const app = express();
config({ path: './config/config.env' });

app.use(
  cors({
    origin: true,
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: 'C:/tmp/',
  })
);

app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/appointment', appointmentRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
