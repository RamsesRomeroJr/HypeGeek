const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI();

const { User, StoreData, FavShoe } = require('../../db/models')

const router = express.Router();

router.get('/home', asyncHandler(async(req,res) =>{
    await sneaks.getMostPopular((err, products)=>{
        return res.json({
            products
        })
    })
}))


router.get('/search/:sneaker', asyncHandler(async(req,res)=>{
    let sneakerName = req.params.sneaker

    await sneaks.getProducts(`${sneakerName}`, (err, products)=>{
        if(products.length){
            return res.json({
                products
            })
        }
    })
}))

router.get('/info/:styleID', asyncHandler(async(req,res)=>{
    let styleId = req.params.styleID

    await sneaks.getProductPrices(`${styleId}`, (err, products)=>{
        // here figure out how to save info into StoreData
        return res.json({
            products
        })
    })
}))

router.post('/favorite/:styleID', asyncHandler(async(req,res)=>{
    const styleId = req.params.styleID
    const {
            userId,
            shoeName,
            thumbNail,
            retailPrice
           }
    await FavShoe.create({userId, shoeName, styleId, thumbNail, retailPrice })
    res.json({message: 'all done'})
}))


router.post('/unfavorite/:styleID', asyncHandler(async(req,res)=>{
    const styleID = req.params.styleID
    await FavShoe.delete(
        {where: {userId: req.body.userId, styleId: styleID}}
    )
    res.json({message: 'deleted'})
}))



module.exports = router;
