const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
pin_code:{type:Number, required:true},
city:{type:String, required:true},
state:{type:String, required:true},
flat_street_name:{type:String, required:true},
area_locality:{type:String, required:true},
landmark:{type:String},
address_as:{type:String},
name:{type:String, requried:true},
number:{type:Number, requried:true},
userId:{type:String}

})


const AddressModel=mongoose.model("address",addressSchema);


module.exports={AddressModel}

// {
//     "pin_code":456010,
//     "city":"ujjain",
//     "state":"madhya pradesh",
//     "flat_street_name":"508",
//     "area_locality":"sethi nagar",
//     "landmark":"near bank of India",
//     "address_as":"home",
//     "name":"vishal sharma",
//     "number":9039331441
// }