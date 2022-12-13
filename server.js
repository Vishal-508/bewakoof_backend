const express =require("express");
const {connection}=require("./Config/db")
const cors=require("cors")
const app =express();
const PORT=3000;
const {userController} =require("./Routes/user.routes");
const {authentication}=require("./middlewares/authentication");
const { json } = require("express");
const { adminController } = require("./Routes/admin.routes");
const { merchantController } = require("./Routes/merchantUser.routers");
const { wishlistController } = require("./Routes/wishlist.routes");
const { allproductController } = require("./Routes/allproducts.routes");
const { cartController } = require("./Routes/addtocart.routes");
const { addressController } = require("./Routes/address.routes");
const { auhorization } = require("./middlewares/authorization");
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("bewakoof.com home page")
})


app.use("/user", userController);
app.use("/admin",adminController);
app.use("/merchantuser",merchantController);
app.use("/wishlist",authentication,auhorization(["customer"]),wishlistController);
app.use("/allproducts",allproductController);
app.use("/addtocart",authentication,auhorization(["customer"]),cartController);
app.use("/address",authentication,auhorization(["customer"]),addressController);



app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log("Error connectiong to DB") 
    }
console.log(`listening at port ${PORT}`)
})

// bewakoof.com accessories
//https://www.bewakoof.com/v1/urls/new-arrivals-for-accessories?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=popular&page=1&limit=500&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22new-arrivals-for-accessories%22}}&custom_filters=[]&user_type=new_user_score&dt=11:11:2022:12

// bagpack accessories
// https://www.bewakoof.com/v1/urls/bestsellers-for-accessories?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=popular&page=1&limit=500&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22bestsellers-for-accessories%22}}&custom_filters=[]&user_type=new_user_score&dt=11:11:2022:12