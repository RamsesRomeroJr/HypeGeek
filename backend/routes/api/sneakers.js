const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('../../sneaks-api')
const sneaks = new SneaksAPI();
const fetch = require('node-fetch');
const { Op } = require("sequelize");

const { User, StoreData, FavShoe, HomeData } = require('../../db/models')

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

    return res.json({
        lowestResellPrice: {
            stockX: 327,
            goat:400,
            flightClub:399,
            stadiumGoods: 415
        },
        styleID: '555088-105',
        imageLinks: [],
        resellLinks: {
            stockX: 'https://stockx.com/air-jordan-1-retro-high-dark-mocha',
            goat: 'https://www.goat.com/sneakers/air-jordan-1-retro-high-og-555088-105?utm_source=google_int&utm_medium=google_shopping_int&utm_campaign=11551954535_111796929839&utm_content=477369526964_&utm_term=194498335222&gclid=Cj0KCQiApsiBBhCKARIsAN8o_4ghUZrGb8nDQtGbzbbPe97YHZ6jO4Z535akDnlQbUVHvU-ws-MY1wYaAjueEALw_wcB',
            flightClub: 'https://www.flightclub.com/air-jordan-1-retro-high-og-sail-dark-mocha-black-black-162310',
            stadiumGoods: 'https://www.stadiumgoods.com/air-jordan-1-retro-high-og-dark-mocha-555088-105'
        },
        thumbnail: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Dark-Mocha/Images/Air-Jordan-1-Retro-High-Dark-Mocha/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1608736454',
        retailPrice: 170,
        releaseDate: '10/31/2020',
        colorway: 'SAIL/DARK MOCHA-BLACK-BLACK',
        description: 'Jordan Brand continued their Black Toe design theme in 2020 and released the Jordan 1 High Dark Mocha, now available on StockX. The Dark Mocha 1 was one of the most anticipated releases in 2020 due to its familiar colorblocking that referenced two of the greatest Jordan 1s of all-time, the Jordan 1 Travis Scott and the Jordan 1 Black Toe.\
        The upper of the Jordan 1 High Dark Mocha features a Sail leather base with black leather surrounding the toe box and Mocha suede on the heel and ankle. A black leather Swoosh, Jordan Wings logo on the ankle, and Nike Air branding on the tongue pays homage to branding that can be found on the original 1985 Jordan 1. A Sail midsole and black outsole complete this Black Toe design.\
        The Jordan 1 High Dark Mocha released in October of 2020 and retailed for $175.',
        shoeName: 'Jordan 1 Retro High Dark Mocha'
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
