const { UserModel } = require("../Models/User.model");

const auhorization=(permitted_Role)=>{
    return async (req,res,next)=>{
        const email=req.body.email;
        const user=await UserModel.findOne({email:email});
        const role=user.role;
        if(permitted_Role.includes(role)){
            next();
        }else{
            res.send("You are not Authorized")
        }
    }
}
module.exports={auhorization}