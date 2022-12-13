const {Router}=require("express");
const { AddtocartModel } = require("../Models/Addtocart.model");

const cartController=Router();

cartController.get("/", async (req,res)=>{
    const cart=await AddtocartModel.find({userId:req.body.userId});
    console.log(cart);
    res.send(cart);
})

cartController.post("/create", async (req, res) => {
    const {
        id,
        all_offer_price,
        category,
        display_image,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        product_sizes,
        price,
        gender,
        quantity,
        offer,
        member_discount,
        product_discount,
        manufacturer_brand,
        userId
    } = req.body;
  
    const cart = new AddtocartModel({
        id,
        all_offer_price,
        category,
        display_image,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        product_sizes,
        price,
        gender,
        quantity,
        offer,
        member_discount,
        product_discount,
        manufacturer_brand,
        userId
    });
    try {
      await cart.save();
      res.send("product is added to cart");
    } catch (err) {
        console.log(err)
      res.send("something went wrong");
    }
  });

  cartController.delete("/:cartId", async (req, res) => {
    const { cartId } = req.params;
    const deleteproduct = await AddtocartModel.findOneAndDelete({
      _id: cartId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send(" Product is Deleted from cart");
    } else {
      res.send("couldn't delete");
    }
  });

  cartController.patch("/edit/:cartId", async (req, res) => {
    const {cartId } = req.params;
  
    const updateProduct = await AddtocartModel.findOneAndUpdate(
      { _id: cartId, userId: req.body.userId },
      { ...req.body }
    );
    if (updateProduct) {
      res.send("Cart is updated");
    } else {
      res.send("couldn't update");
    }
  });

// id,
// all_offer_price,
// category,
// display_image,
// stock_status,
// member_price,
// mrp,
// name,
// offer_type,
// product_sizes,
// price,
// gender,
// quantity,
// offer,
// member_discount,
// product_discount,
// manufacturer_brand



module.exports={cartController}
