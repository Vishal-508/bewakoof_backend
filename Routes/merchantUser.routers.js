const {Router}=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { MerchantUserModel } = require("../Models/MerchantUser.model");
const { authentication } = require("../middlewares/authentication");
const { auhorization } = require("../middlewares/authorization");
require("dotenv").config();
const merchantController=Router();


merchantController.get("/",authentication,auhorization(["admin"]), async(req,res)=>{
    const users= await MerchantUserModel.find();
    res.send(users);

})


merchantController.delete("/delete/:userId",authentication,auhorization(["admin","merchant"]), async (req, res) => {
    const { userId } = req.params;
    const deleteproduct = await MerchantUserModel.findOneAndDelete({
      _id: userId,
      
    });
    if (deleteproduct) {
      res.send("Deleted");
    } else {
      res.send("couldn't delete");
    }
  });



merchantController.post("/signup",(req,res)=>{
    const {email,password,name,number}=req.body;
    bcrypt.hash(password, 5,async function(err, hash) {
       if(err){
           res.send("Something went wrong, please try again later")
       }
       const user= new MerchantUserModel({
           email,
           password:hash,
           name,
           number
       })
       try{
           await user.save();
           res.send("Signup Successfull")
       }catch(err){
           console.log(err);
           res.send("Something went wrong, please try again")
       }
   });

  
})

merchantController.post("/login", async(req,res)=>{

   const {email,password}=req.body;
  try{

     var user= await MerchantUserModel.findOne({email});
     const hash=user.password;
     bcrypt.compare(password, hash, function(err, result) {
         if(err){
             res.send({message:"Something went wrong, please try again later"})
         } 
         if(result){
             var token = jwt.sign({userId:user._id, email:email }, process.env.SECRET_KEY);
             res.send({message:"Login Successfull", token })
         }else{
             res.send({message:"Invalid credentials, pelase signup if you haven't"})
         }
       }); 
   }catch(err){
       res.send("Invalid credentials, pelase signup if you haven't")
   }  
})


// userController.post("/admin",(req,res)=>{
//    const {email,password,admin_key}= req.body;


// })



module.exports={
    merchantController
}