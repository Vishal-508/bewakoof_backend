const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
email:{type:String, required:true},
name:{type:String, required:true},
number:{type:Number, required:true},
password:{type:String, required:true},
role:{type:String,default:"customer"}
})

const UserModel=mongoose.model("user", userSchema);
module.exports={
    UserModel
}