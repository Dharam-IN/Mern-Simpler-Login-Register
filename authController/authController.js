import userModel from "../models/userModel.js";

export const registerController = async(req, res)=>{
    try {
        const {fname, email, password, phone} = req.body;

        if(!fname || !email || !password || !phone){
            return res.send({
                message: "Please Fill all fields"
            });
        }

        console.log(fname, email, password, phone)
        // Check User Exist or Not
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "This Email Allready Exists"
            })
        }else{
            const fineluser = new userModel({
                fname, email, password, phone
            });

            const storedata = await fineluser.save();
            res.status(201).json({status: 201, storedata})
        }

    } catch (error) {
        console.log(`Error in register controll ${error}`)
    }
}