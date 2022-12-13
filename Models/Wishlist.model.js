const mongoose=require("mongoose");

const wishlistSchema=mongoose.Schema({
    id:{type:Number},
    all_offer_price:{type:Number},
    category:{type:String},
    display_image:{type:String},
    stock_status:{type:String},
    member_price:{type:Number},
    mrp:{type:Number},
    name:{type:String},
    offer_type:{type:String},
    product_sizes:{type:String},
    price:{type:Number},
    gender:{type:String},
    quantity:{type:Number},
    offer:{type:String},
    member_discount:{type:String},
    product_discount:{type:String},
    manufacturer_brand:{type:String},
    userId:{type:String}
})


const WishlistModel=mongoose.model("wishlist",wishlistSchema);


module.exports={WishlistModel}








// {
//     "id": 391557,
//     "all_offer_price": 999,
//     "description": "",
//     "category": "T-Shirt",
//     "color": [
//     "black"
//     ],
//     "design": "",
//     "display_image": "village-symbols-cotton-half-sleeves-t-shirt-391557-1656079592-1.jpg",
//     "flip_image": null,
//     "parent_category": null,
//     "product_sizes": [
//     {
//     "id": 773770,
//     "name": "S",
//     "stock_status": false
//     },
//     {
//     "id": 773771,
//     "name": "M",
//     "stock_status": true
//     },
//     {
//     "id": 773772,
//     "name": "L",
//     "stock_status": true
//     },
//     {
//     "id": 773773,
//     "name": "XL",
//     "stock_status": true
//     },
//     {
//     "id": 773774,
//     "name": "2XL",
//     "stock_status": false
//     }
//     ],
//     "stock_status": true,
//     "member_price": 569,
//     "mrp": 999,
//     "name": "Village Symbols Cotton Half Sleeves T-Shirt",
//     "custom_name": "Village Symbols Cotton Half Sleeves T-Shirt",
//     "offer_type": "price_cut",
//     "price": 599,
//     "ptype": "single",
//     "subclass": "T-Shirt",
//     "url": "redwolf-village-symbols-half-sleeves-cotton-t-shirt",
//     "brand": null,
//     "model": null,
//     "material": "",
//     "status": 1,
//     "color_name": null,
//     "tribe_text": "For TriBe Members",
//     "tribe_image_url": "",
//     "designer": null,
//     "cat_designer": "",
//     "in_stock": 1,
//     "gender": "Men",
//     "experiment_id": null,
//     "limited_edition": false,
//     "group_count": 0,
//     "category_info": {
//     "gender": "Men",
//     "subclass": "T-Shirt",
//     "id": 43,
//     "name": "T-Shirt",
//     "url": ""
//     },
//     "child_category": {
//     "gender": "Men",
//     "subclass": "T-Shirt",
//     "id": 43,
//     "name": "T-Shirt",
//     "url": ""
//     },
//     "sp": null,
//     "offer": "14% OFF",
//     "coin_statement": null,
//     "tags": [],
//     "tribe_header": null,
//     "upgraded_dimension": true,
//     "average_rating": 4.4,
//     "member_discount": "43% OFF",
//     "product_discount": "40% OFF",
//     "manufacturer_brand": "Redwolf",
//     "stock_indicator_tag": {
//     "label": "Few Left"
//     }
//     }