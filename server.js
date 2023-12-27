import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import authRouter from './authRouter/authRouter.js';
import cors from 'cors';

// config dotenv
dotenv.config();

// PORT
const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json())

// Routes
app.use(cors());
app.use('/api/v1/auth', authRouter);

// Database define
connectDB();


app.get('/',(req, res)=>{
    res.send({
        message: "India"
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})