const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('../../sneaks-api')
const sneaks = new SneaksAPI();
const fetch = require('node-fetch');
const { Op } = require("sequelize");

const { User, StoreData, FavShoe, HomeData, SneakerInfo } = require('../../db/models')

const router = express.Router();

router.get('/home', asyncHandler(async(req,res) =>{
    await sneaks.getMostPopular((err, products)=>{
        return res.json({
            products
        })
    })

    const HomeDataArray = [];
    const HomeDatas = await HomeData.findAll()
    for(let i=0; i < HomeDatas.length; i++){
        HomeDataArray.push({
            styleID: HomeDatas[i].styleID,
            shoeName: HomeDatas[i].shoeName,
            lowestResellPrice: {
                stockX: HomeDatas[i].stockXLow,
                goatLow: HomeDatas[i].goatLow,
                flightClubLow: HomeDatas[i].flightClubLow,
                stadiumGoodsLow: HomeDatas[i].stadiumGoodsLow,
            },
            thumbnail: HomeDatas[i].thumbnail
        })
    }

    // console.log(HomeDataArray)
    return  res.json({products: HomeDataArray})
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

    const searchedResults = [];
    const searched = await HomeData.findAll({where:
        {shoeName: {
            [Op.iLike]: `%${sneakerName}%`
        }}})


    for(let i=0; i < searched.length; i++){
        searchedResults.push({
            styleID: searched[i].styleID,
            shoeName: searched[i].shoeName,
            lowestResellPrice: {
                stockX: searched[i].stockXLow,
                goatLow: searched[i].goatLow,
                flightClubLow: searched[i].flightClubLow,
                stadiumGoodsLow: searched[i].stadiumGoodsLow,
            },
            thumbnail: searched[i].thumbnail
        })
    }
    return  res.json({products: searchedResults})
}))

router.get('/info/:styleID', asyncHandler(async(req,res)=>{
    let styleId = req.params.styleID

    // let resss = await fetch('https://sneaks-api.azurewebsites.net/id/CP9652/prices')
    // console.log( JSON.parse(resss.body))

    await sneaks.getProductPrices(`${styleId}`, async (err, products)=>{
        // here figure out how to save info into StoreData
        // const {
        //     styleID,
        //     shoeName,
        // } = products
        // const {
        //     stockX,
        //     goat,
        //     stadiumGoods,
        //     flightClub
        // } = products.lowestResellPrice
        // let lowestPrice = Math.min(stockX,goat,stadiumGoods,flightClub)

        // await StoreData.create({styleId,
        //     shoeName,
        //     lowestPrice,
        //     stockxLow:stockX,
        //     goatLow:goat,
        //     flightClubLow:flightClub,
        //     stadiumGoodsLow:stadiumGoods
        // })

        return res.json({
            products
        })
    })

    const sneakerInfo = await SneakerInfo.findOne({where: {styleID: styleId }})
    return res.json({
        product: {
            lowestResellPrice: {
                stockX: sneakerInfo.stockXLow,
                goat: sneakerInfo.goatLow,
                flightClub:sneakerInfo.flightClubLow,
                stadiumGoods: sneakerInfo.stadiumGoodsLow
            },
            styleID: sneakerInfo.styleID,
            imageLinks: [
                sneakerInfo.linkImage1,
                sneakerInfo.linkImage2,
                sneakerInfo.linkImage3,
                sneakerInfo.linkImage4,
            ],
            resellLinks: {
                stockX: sneakerInfo.stockXLink,
                goat: sneakerInfo.goatLink,
                flightClub: sneakerInfo.flightClubLink,
                stadiumGoods: sneakerInfo.stadiumGoodsLink
            },
            thumbnail: sneakerInfo.thumbnail,
            retailPrice: sneakerInfo.retailPrice,
            releaseDate: sneakerInfo.releaseDate,
            colorway: sneakerInfo.colorway,
            description: sneakerInfo.description,
            shoeName: sneakerInfo.shoeName
    }})
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
