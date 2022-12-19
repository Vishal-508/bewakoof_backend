const {Router}=require("express");
const { AddressModel } = require("../Models/Address.model");

const addressController=Router();

addressController.get("/", async (req, res) => {
    const address = await AddressModel.find({userId:req.body.userId});
    console.log(address);
    res.send(address);
  });




  addressController.post("/create", async (req, res) => {
    const {
        pin_code,
        city,
        state,
        flat_street_name,
        area_locality,
        landmark,
        address_as,
        name,
        number,
        userId
    } = req.body;
  
    const address = new AddressModel({
        pin_code,
        city,
        state,
        flat_street_name,
        area_locality,
        landmark,
        address_as,
        name,
        number,
        userId
    });
    try {
      await address.save();
      res.send({message:"address created"});
    } catch (err) {
        console.log(err)
      res.send({message:"something went wrong"});
    }
  });


  addressController.delete("/:addressId", async (req, res) => {
    const { addressId } = req.params;
    const deleteproduct = await AddressModel.findOneAndDelete({
      _id: addressId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send({message:"Deleted"});
    } else {
      res.send({message:"couldn't delete"});
    }
  });

  addressController.patch("/edit/:addressId", async (req, res) => {
    const {addressId } = req.params;
  
    const updateProduct = await AddressModel.findOneAndUpdate(
      { _id: addressId, userId: req.body.userId },
      { ...req.body }
    );
    if (updateProduct) {
      res.send({message:"updated"});
    } else {
      res.send({message:"couldn't update"});
    }
  });

module.exports={addressController}

// card number checker link
// https://www.bewakoof.com/v1/payment_utils/get_card_info?card_prefix=123122&length=16&dt=11:11:2022:18