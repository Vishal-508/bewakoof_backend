
const mongoose =require("mongoose");

const productSchema=mongoose.Schema({
    id: {type:String,required:true},
    all_offer_price: {type:Number,required:true},
    description: {type:String,required:true},
    category: {type:String,required:true},
    color: {type:Array,required:true},
    display_image: {type:String,required:true},
    other_images:{type:Array,required:true},
    flip_image: {type:String,required:true},
    product_sizes: {type:Array,required:true},
    stock_status: {type:Boolean,required:true},
    member_price: {type:Number,required:true},
    mrp: {type:Number,required:true},
    name: {type:String,required:true},
    offer_type: {type:String,required:true},
    price: {type:Number,required:true},
    url: {type:String,required:true},
    brand: {type:String,required:true},
    status: {type:Number,required:true},
    in_stock: {type:Number,required:true},
    gender: {type:String,required:true},
    limited_edition: {type:Boolean,required:true},
    category_info: {type:Object,required:true},
    offer: {type:String,required:true},
    average_rating: {type:Number,required:true},
    member_discount: {type:String,required:true},
    product_discount: {type:String,required:true},
    manufacturer_brand: {type:String,required:true},
    userId:{type:String,required:true}
})

const ProductModel=mongoose.model("allProduct",productSchema);

module.exports={ProductModel}











    // "id": 391557,
    // "all_offer_price": 999,
    // "description": "",
    // "category": "T-Shirt",
    // "color": [
    // "black"
    // ],
    // "design": "",
    // "display_image": "village-symbols-cotton-half-sleeves-t-shirt-391557-1656079592-1.jpg",
    // "flip_image": null,
    // "parent_category": null,
    // "product_sizes": [
    // {
    // "id": 773770,
    // "name": "S",
    // "stock_status": false
    // },
    // {
    // "id": 773771,
    // "name": "M",
    // "stock_status": true
    // },
    // {
    // "id": 773772,
    // "name": "L",
    // "stock_status": true
    // },
    // {
    // "id": 773773,
    // "name": "XL",
    // "stock_status": true
    // },
    // {
    // "id": 773774,
    // "name": "2XL",
    // "stock_status": false
    // }
    // ],
    // "stock_status": true,
    // "member_price": 569,
    // "mrp": 999,
    // "name": "Village Symbols Cotton Half Sleeves T-Shirt",
    // "custom_name": "Village Symbols Cotton Half Sleeves T-Shirt",
    // "offer_type": "price_cut",
    // "price": 599,
    // "ptype": "single",
    // "subclass": "T-Shirt",
    // "url": "redwolf-village-symbols-half-sleeves-cotton-t-shirt",
    // "brand": null,
    // "model": null,
    // "material": "",
    // "status": 1,
    // "color_name": null,
    // "tribe_text": "For TriBe Members",
    // "tribe_image_url": "",
    // "designer": null,
    // "cat_designer": "",
    // "in_stock": 1,
    // "gender": "Men",
    // "experiment_id": null,
    // "limited_edition": false,
    // "group_count": 0,
    // "category_info": {
    // "gender": "Men",
    // "subclass": "T-Shirt",
    // "id": 43,
    // "name": "T-Shirt",
    // "url": ""
    // },
    // "child_category": {
    // "gender": "Men",
    // "subclass": "T-Shirt",
    // "id": 43,
    // "name": "T-Shirt",
    // "url": ""
    // },
    // "sp": null,
    // "offer": "14% OFF",
    // "coin_statement": null,
    // "tags": [],
    // "tribe_header": null,
    // "upgraded_dimension": true,
    // "average_rating": 4.4,
    // "member_discount": "43% OFF",
    // "product_discount": "40% OFF",
    // "manufacturer_brand": "Redwolf",
    // "stock_indicator_tag": {
    // "label": "Few Left"
    // }
