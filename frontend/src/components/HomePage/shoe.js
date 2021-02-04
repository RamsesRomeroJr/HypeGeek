import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ShoeContainer = styled.div`
    /* display: inline-block;
    width: auto;
    margin: 50px;*/
    /* border: 1px solid #008001; */
    border-radius:10px;

    background-color: white;
`

const ShoeImage = styled.img`
    flex-shrink: 0;
    width: 80%;
    margin: 0 auto;
`

const ShoeName = styled.h3`
    color: black;
    text-decoration:none;
`

const ShoePrice = styled.h3`
    color: grey;
    text-decoration:none;
`


function Shoe({sneaker}){
    const lowestPrices = sneaker.lowestResellPrice

    let keys = Object.keys(lowestPrices);
    let key = keys[0]
    let minValue =lowestPrices[key]

    for(let i=1; i < keys.length; i++){
        let currVal = lowestPrices[keys[i]]
        if(minValue > currVal){
            key = keys[i]
            minValue = currVal}
        }


    return(
        <ShoeContainer>
            <NavLink style={{textDecoration: 'none'}} to={`/sneaker/${sneaker.styleID}`}>
            <ShoeName> {sneaker.shoeName} </ShoeName>
            <ShoePrice>{`From $${minValue} ${key}`}</ShoePrice>
            <ShoeImage src={sneaker.thumbnail} />
            </NavLink>

        </ShoeContainer>
    )
}

export default Shoe;
