const mongoose=require("mongoose");

const merchantSchema=mongoose.Schema({
        email:{type:String, required:true},
        name:{type:String, required:true},
        number:{type:Number, required:true},
        password:{type:String, required:true},
        role:{type:String,default:"merchant"},
        userId:{type:String}
})



const MerchantUserModel= mongoose.model("merchantuser",merchantSchema);

module.exports={MerchantUserModel}