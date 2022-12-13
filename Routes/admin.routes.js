const {Router}=require("express");
const { UserModel } = require("../Models/User.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();


const adminController=Router();
adminController.post("/adminLogin", async(req,res)=>{
    const {email,password}=req.body;
    try{
        var user= await UserModel.findOne({email});
        const hash=user.password;
        
        bcrypt.compare(password, hash, function(err, result) {
            
            if(err){
                res.send({message:"Something went wrong, please try again later"})
            }
            if(result && user.role==="admin" ){
                var token =jwt.sign({userId:user._id, email:email},process.env.SECRET_KEY);
                res.send({message:"Login Successfull", token});

            }else{
                res.send({message:"Invalid Credentials"})
            }
        })
    }catch(err){
        console.log("err");
        res.send("Invalid Credentials by catch")
    }

})




module.exports={adminController}