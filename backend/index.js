/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { mongoconnection } from './config/databaseconnection.js';

dotenv.config();
const PORT = process.env.PORT;


const app = express();
// MIDDLEWARES
app.use(express.json())
app.use(cookieParser())
app.use(cors({

}))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to THE BH SERVER',
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
    mongoconnection();
})