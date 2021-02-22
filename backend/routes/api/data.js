const express = require('express')
const asyncHandler = require('express-async-handler');

const {StoreData} = require('../../db/models')

const router = express.Router();

router.get('/grab/:styleID', asyncHandler(async(req,res)=>{
    const styleId = req.params.styleID;

    const storedData = await StoreData.findOne({where: {styleId: styleId}})
    // console.log(storedData.shoeName)
    // res.json({
    //     lowestPrice: {
    //         stockX:storedData.stockxLow,
    //         goat: storedData.goatLow,
    //         flightClub: storedData.flightClubLow,
    //         stadiumGoods : storedData.stadiumGoodsLow
    //     }
    // })
    res.json(storedData)
}))

router.post('/save', asyncHandler(async(req,res)=>{

    const{
        styleId,
        shoeName,
        lowestPrice,
        stockxLow,
        goatLow,
        flightClubLow,
        stadiumGoodsLow
    } = req.body

    await StoreData.create({
        styleId,
        shoeName,
        lowestPrice,
        stockxLow,
        goatLow,
        flightClubLow,
        stadiumGoodsLow
    })

    const storedData = await StoreData.findAll({where:{styleId: styleId}})

    res.json({storedData})
}))

module.exports = router;
