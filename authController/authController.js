import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const registerController = async(req, res)=>{
    try {
        const {fname, email, password, phone} = req.body;

        if(!fname || !email || !password || !phone){
            return res.send({
                message: "Please Fill all fields"
            });
        }

        // Check User Exist or Not
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "This Email Allready Exists"
            })
        }else{

            // password hashing

            const saltRound = 10;
            const hashedpassword = await bcrypt.hash(password, saltRound);
            
            const fineluser = new userModel({
                fname, email, password:hashedpassword, phone
            });

            const storedata = await fineluser.save();
            res.status(201).json({
                status: 201,
                message: "User Register Successfully", 
                data: storedata
            })
        }

    } catch (error) {
        console.log(`Error in register controll ${error}`)
        res.status(500).json({
            success: false,
            message: "Internal Server Error In User Register",
        });

    }
}

// Login

export const loginController = async (req, res)=>{
    try {
        const {email, password} = req.body;

        // Check Email
        const user = await userModel.findOne({email});

        if(user){
            const comparePass = await bcrypt.compare(password, user.password)
            if(comparePass){
                return res.status(200).json({
                    success: true,
                    message: "User Login Sucessfully"
                })
            }else{
                return res.status(401).json({
                    success: false,
                    message: "Email & Password Not Found"
                })
            }
        }else{
            console.log("Email Not Match")
        }

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Email not found",
        });
    }
}
