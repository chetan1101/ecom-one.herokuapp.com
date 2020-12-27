const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true, default:0},
    brand:{type:String,required:true},
    ratting:{type:Number,required:true, default:0},
    numReviews:{type:Number,required:true, default:0},
    qty:{type:Number,required:true, default:0},
    description:{type:String,required:true}
});

module.exports = mongoose.model("Product", productSchema);