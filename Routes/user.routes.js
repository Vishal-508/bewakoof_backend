const {Router}=require("express");
const {UserModel}=require("../Models/User.model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { authentication } = require("../middlewares/authentication");
const { auhorization } = require("../middlewares/authorization");
require("dotenv").config();


const userController=Router();




userController.get("/",authentication,auhorization(["admin"]), async(req,res)=>{
    const users= await UserModel.find();
    res.send(users);
})

userController.get("/singleUser/:userId",authentication,auhorization(["admin","customer"]), async(req,res)=>{
    const UserId= req.body.userId;
    // console.log(UserId)
    const users= await UserModel.findOne({_id:UserId});
    res.send(users);
})

userController.delete("/delete/:userId",authentication,auhorization(["admin","customer"]), async (req, res) => {
    const { userId } = req.params;
    const deleteproduct = await UserModel.findOneAndDelete({
      _id: userId,
      
    });
    if (deleteproduct) {
      res.send({message:"Deleted"});
    } else {
      res.send({message:"couldn't delete"});
    }
  });







userController.post("/signup",(req,res)=>{
     const {email,password,name,number}=req.body;
     bcrypt.hash(password, 5,async function(err, hash) {
        if(err){
            res.send({message:"Something went wrong, please try again later"})
        }
        const user= new UserModel({
            email,
            password:hash,
            name,
            number
        })
        try{
            await user.save();
            res.send({message:"Signup Successfull"})
        }catch(err){
            console.log(err);
            res.send({message:"Something went wrong, please try again"})
        }
    });

   
})

userController.post("/login", async(req,res)=>{

    const {email,password}=req.body;
   try{

      var user= await UserModel.findOne({email});
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
        res.send({message:"Invalid credentials, pelase signup if you haven't"})
    }  
})


// userController.post("/admin",(req,res)=>{
//    const {email,password,admin_key}= req.body;
 

// })



module.exports={
    userController
}