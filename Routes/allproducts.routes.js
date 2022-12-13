const {Router}=require("express");
const { authentication } = require("../middlewares/authentication");
const { auhorization } = require("../middlewares/authorization");
const { ProductModel } = require("../Models/Allproducts.model");

const allproductController=Router();

allproductController.get("/", async (req, res) => {
  const query=req.query;
  console.log(query);
  const{limit=40,page=1}=req.query;
  const {sort="asc"}=req.query;
  var x=1;
  if(sort==="desc"){
    x=-1;
  }
    const products = await ProductModel.find(query).limit(limit).skip((page-1)*limit).sort({price:`${x}`});
  
    res.send(products);
  });
 


  allproductController.post("/create",authentication,auhorization(["merchant","admin"]), async (req, res) => {
    const {
        _id,
        all_offer_price,
        description,
        category,
        color,
        display_image,
        other_images,
        flip_image,
        product_sizes,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        price,
        url,
        brand,
        status,
        in_stock,
        gender,
        limited_edition,
        category_info,
        offer,
        average_rating,
        member_discount,
        product_discount,
        manufacturer_brand
    } = req.body;
  
    const product = new ProductModel({
        _id,
        all_offer_price,
        description,
        category,
        color,
        display_image,
        other_images,
        flip_image,
        product_sizes,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        price,
        url,
        brand,
        status,
        in_stock,
        gender,
        limited_edition,
        category_info,
        offer,
        average_rating,
        member_discount,
        product_discount,
        manufacturer_brand
    });
    try {
      await product.save();
      res.send("product is created");
    } catch (err) {
        console.log(err)
      res.send("something went wrong");
    }
  });
  
  allproductController.delete("/delete/:productId",authentication,auhorization(["merchant","admin"]), async (req, res) => {
    const { productId } = req.params;
    const deleteproduct = await ProductModel.findOneAndDelete({
      _id: productId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send("Deleted");
    } else {
      res.send("couldn't delete");
    }
  });
  
  allproductController.patch("/edit/:productId",authentication,auhorization(["merchant","admin"]), async (req, res) => {
    const { productId } = req.params;
  
    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: productId, userId: req.body.userId },
      { ...req.body }
    );
    if (updateProduct) {
      res.send("updated");
    } else {
      res.send("couldn't update");
    }
  });






module.exports={allproductController}


// {
//     "id": 509623,
//     "all_offer_price": 1499,
//     "description": "",
//     "category": "Shirt",
//     "color": [
//     "purple"
//     ],
//     "display_image": "men-s-purple-casual-shirt-509623-1656179310-1.JPG",
//     "flip_image": null,
//     "product_sizes": [
//     {
//     "id": 1033761,
//     "name": "M",
//     "stock_status": true
//     },
//     {
//     "id": 1033746,
//     "name": "L",
//     "stock_status": true
//     },
//     {
//     "id": 1033750,
//     "name": "XL",
//     "stock_status": true
//     },
//     {
//     "id": 1033755,
//     "name": "2XL",
//     "stock_status": true
//     }
//     ],
//     "stock_status": true,
//     "member_price": 469,
//     "mrp": 1499,
//     "name": "Men's Purple Casual Shirt",
//     "offer_type": "price_cut",
//     "price": 499,
//     "url": "mens-purple-cazdjashdjkhsual-shirt",
//     "status": 1,
//     "in_stock": 1,
//     "gender": "Men",
//     "limited_edition": false,
//     "category_info": {
//     "gender": "Men",
//     "subclass": "Shirt",
//     "id": 44,
//     "name": "Shirt",
//     "url": ""
//     },
//     "offer": "14% OFF",
//     "member_discount": "68% OFF",
//     "product_discount": "66% OFF",
//     "manufacturer_brand": "Riag"
//     }