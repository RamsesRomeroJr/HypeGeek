const express = require('express')
const asyncHandler = require('express-async-handler');

const {StoreData} = require('../../db/models')

const router = express.Router();

router.get('/grab/:styleID', asyncHandler(async(req,res)=>{
    const styleId = req.params.styleID;

    const storedData = StoreData.findAll({where: {styleId: styleId}})

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
