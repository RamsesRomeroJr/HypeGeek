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

    await sneaks.getProductPrices(`${styleId}`, async (err, products)=>{
        // here figure out how to save info into StoreData
        const {
            styleID,
            shoeName,
        } = products
        const {
            stockX,
            goat,
            stadiumGoods,
            flightClub
        } = products.lowestResellPrice
        let lowestPrice = Math.min(stockX,goat,stadiumGoods,flightClub)

        await StoreData.create({styleId,
            shoeName,
            lowestPrice,
            stockxLow:stockX,
            goatLow:goat,
            flightClubLow:flightClub,
            stadiumGoodsLow:stadiumGoods
        })

        return res.json({
            products
        })
    })
}))

router.post('/favorite/:styleID', asyncHandler(async(req,res)=>{
    const styleId = req.params.styleID
    const{
            userId,
            shoeName,
            thumbnail,
            retailPrice
           } = req.body
    await FavShoe.create({userId, shoeName, styleId, thumbNail:thumbnail, retailPrice })

    const userFavorites = await FavShoe.findAll({where: {userId: req.body.userId}})

    res.json({userFavorites})
}))


router.post('/unfavorite/:styleID', asyncHandler(async(req,res)=>{
    const styleID = req.params.styleID

    await FavShoe.destroy(
        {where: {userId: req.body.userId, styleId: styleID}}
    )
    const userFavorites = await FavShoe.findAll({where: {userId: req.body.userId}})

    res.json({userFavorites})
}))

router.get('/userFav/:userId', asyncHandler(async(req, res) => {
    const userFavorites = await FavShoe.findAll({where: {userId: req.params.userId}})

     res.json({userFavorites});
}))


module.exports = router;
