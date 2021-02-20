const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('../../sneaks-api')
const sneaks = new SneaksAPI();
const fetch = require('node-fetch');

const { User, StoreData, FavShoe } = require('../../db/models')

const router = express.Router();

router.get('/home', asyncHandler(async(req,res) =>{
    await sneaks.getMostPopular((err, products)=>{
        return res.json({
            products
        })
    })
    return  res.json({products: [
        {
            styleID: '555088-105',
            shoeName: 'Jordan 1 Retro High Dark Mocha',
            lowestResellPrice: {
                stockX: 327,
                goat: 400,
                flightClub:399,
                stadiumGoods: 415
            },
            thumbnail: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Dark-Mocha/Images/Air-Jordan-1-Retro-High-Dark-Mocha/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608736454'
        },
    ]})
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

    // let resss = await fetch('https://sneaks-api.azurewebsites.net/id/CP9652/prices')
    // console.log( JSON.parse(resss.body))

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
