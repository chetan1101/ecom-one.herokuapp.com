const express = require("express");
const router = express.Router();

const Product = require("../Models/productModel");
const { isAuth, isAdmin } = require("../utils");

// get all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//get product
router.get("/:id", async (req, res)=>{
    const productId = req.params.id;
    const product = await Product.findById({_id:productId});
    if(product){
        res.status(200).send(product)
    }else{
        res.status(404).send({ msg: "product not found." });
    }
})

//add product
router.post("/", isAuth, isAdmin, async (req, res)=>{
    const product = new Product({
        name:req.body.name,
        category:req.body.category,
        image:req.body.image,
        price:req.body.price,
        brand:req.body.brand,
        ratting:req.body.ratting,
        numReviews:req.body.numReviews,
        qty:req.body.qty,
        description:req.body.description
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send(newProduct);
    }else{
        return res.status(500).send({msg:"Error on creating product."})
    }
})

// edit product route
router.put("/:id", isAuth, isAdmin, async (req, res)=>{
    const proudctId = req.params.id;
    const updatedProduct = await Product.updateOne({_id : proudctId},{$set:{
        name:req.body.name,
        category:req.body.category,
        image:req.body.image,
        price:req.body.price,
        brand:req.body.brand,
        ratting:req.body.ratting,
        numReviews:req.body.numReviews,
        qty:req.body.qty,
        description:req.body.description
    }})
    if(updatedProduct){
        res.status(200).send(updatedProduct);
    }else{
        res.status(500).send({msg:"error on updateing product."});
    }
})

// del product
router.delete('/:id', isAuth, isAdmin, async (req, res)=>{
    const deletedProduct = await Product.deleteOne({_id:req.params.id})
    if(deletedProduct){
        res.send(deletedProduct)
    }else{
        res.send({msg:"product not found"})
    }
})


module.exports = router;