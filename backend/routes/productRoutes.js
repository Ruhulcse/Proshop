import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router();
import Product from '../models/productModel.js'

//@desc    Fetch all Productcs
//@route   GET /api/products
//@access  Public
router.get('/',asyncHandler(async(req,res)=>{
    console.log("requested")
    const products = await Product.find({})
    res.json(products)
}))

//@desc    Fetch single Product
//@route   GET /api/products/:id
//@access  Public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(400).json({message: 'Product not found'})
    }

}))

export default router