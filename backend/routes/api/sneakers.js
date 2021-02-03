const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI();

const { User, StoreData, FavShoe } = require('../../db/models')

const router = express.Router();

router.get('/home', asyncHandler(async(req,res) =>{
    await sneaks.getMostPopular((err, products)=>{
        res.json({
            products
        })
    })
}))


router.get('/search/:sneaker', asyncHandler(async(req,res)=>{
    let sneakerName = req.params.sneaker

    await sneaks.getProducts(`${sneakerName}`, (err, products)=>{
        if(products.length){
            res.json({
                products
            })
        }
    })
}))

router.get('/info/:styleID', asyncHandler(async(req,res)=>{
    let styleId = req.params.styleID

    await sneaks.getProductPrices(`${styleId}`, (err, products)=>{
        // here figure out how to save info into StoreData
        res.json({
            products
        })
    })
}))




module.exports = router;
