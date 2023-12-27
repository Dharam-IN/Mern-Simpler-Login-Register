import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    }
})

const userModel = new mongoose.model("users", userSchema)

export default userModel;
