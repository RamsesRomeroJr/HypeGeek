const express = require('express');
const asyncHandler = require('express-async-handler');
const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI();

const { User, StoreData, FavShoe } = require('../../db/models')

const router = express.Router();

router.get('/home', asyncHandler(async(req,res) =>{

    sneaks.getMostPopular((err, products)=>{

        res.json({
            products
        })
    })
}))

module.exports = router;
