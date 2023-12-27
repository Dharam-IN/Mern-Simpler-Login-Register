import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// db url
const DB = process.env.MONGO_URL;

const connectDB = async()=>{
    try {
        await mongoose.connect(DB);
        console.log("Database connected")
    } catch (error) {
        console.log(`Error in database Connect ${error}`)
    }
}

export default connectDB;
