const {Router}=require("express");
const { WishlistModel } = require("../Models/Wishlist.model");

const wishlistController=Router();

wishlistController.get("/", async (req, res) => {
    const address = await WishlistModel.find({userId:req.body.userId});
    console.log(address);
    res.send(address);
  });

  wishlistController.post("/create", async (req, res) => {
    const {
      Pid,
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

    const wishlist = new WishlistModel({
        id,
        Pid,
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
      await wishlist.save();
      res.send({message:"product is added to wishlist"});
    } catch (err) {
        console.log(err)
      res.send({message:"something went wrong"});
    }
  });

  wishlistController.delete("/:cartId", async (req, res) => {
    const { cartId } = req.params;
    const deleteproduct = await WishlistModel.findOneAndDelete({
      _id: cartId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send({message:" Product is Deleted from cart"});
    } else {
      res.send({message:"couldn't delete"});
    }
  });

  wishlistController.patch("/edit/:wishlistId", async (req, res) => {
    const {wishlistId } = req.params;
  
    const updateProduct = await WishlistModel.findOneAndUpdate(
      { _id: wishlistId, userId: req.body.userId },
      { ...req.body }
    );
    if (updateProduct) {
      res.send({message:"Wishlist is updated"});
    } else {
      res.send({message:"couldn't update"});
    }
  });


module.exports={wishlistController}