import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ImageSlider from './Slider/ImageSlider'
import FavoriteComp from '../FavoriteComp/index.js'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {saveData} from '../../store/data'


const SneakerContainer = styled.div`
    width: 100%;
`

const SneakerName = styled.h3`
    color: black;
    text-decoration:none;
    font-family: 'Staatliches', cursive;
    font-weight:600;
    font-size: 30px;
`

const SneakerImages = styled.img`
    /* flex-shrink: 3; */
    width: 100%;
    margin: 0 auto;
    left:10000px;
`

function Sneaker({sneakerInfo}){
    const history = useHistory();
    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user)

    if(user === null){
        history.push(`/`)
    }

    let userId;
    if (user !== null){
        userId = user.id
    }

    async function getFavorites(){
        let res = await fetch(`/api/sneaker/userFav/${userId}`)
        console.log(res.data)
        let favoritesArr = res.data
        return favoritesArr
    }
    const {
        stockX,
        flightClub,
        goat,
        stadiumGoods
    } = sneakerInfo.lowestResellPrice

    const lowestPrice = Math.min(stockX, flightClub, goat, stadiumGoods)

    const styleId = sneakerInfo.styleID

    useEffect(()=>{

        if(user === null){
            history.push(`/`)
        }

        getFavorites()
        dispatch(saveData({
            styleId,
            shoeName:sneakerInfo.shoeName,
            lowestPrice,
            stockxLow:stockX,
            flightClubLow:flightClub,
            goatLow:goat,
            stadiumGoodsLow:stadiumGoods
        }))
        // dispatch(userFav(fav))
    }, [dispatch])



    const sneakerName = sneakerInfo.shoeName;
    const images = sneakerInfo.imageLinks
    return(
        <SneakerContainer>
            <SneakerName>
                {sneakerName}
            </SneakerName>
            <FavoriteComp sneakerInfo={sneakerInfo}/>
            <ImageSlider images={images} />
        </SneakerContainer>
    )
}

export default Sneaker;
