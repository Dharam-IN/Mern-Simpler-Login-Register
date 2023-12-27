import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

// config dotenv
dotenv.config();

// PORT
const PORT = process.env.PORT;
console.log(PORT)

const app = express();

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