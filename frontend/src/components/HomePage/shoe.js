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
    border:solid 0.5px lightgrey;
    box-shadow: 0 1px 5px 0px rgba(0,0,0,0.6);

    &:hover{
        box-shadow: 0 5px 15px 0px rgba(0,128,0,0.9);
    }
`

const ShoeImage = styled.img`
    flex-shrink: 0;
    width: 80%;
    margin: 0 auto;
`

const ShoeName = styled.h3`
    color: black;
    text-decoration:none;
    font-family: 'Staatliches', cursive;
    font-weight:3;
`

const ShoePrice = styled.h3`
    color: grey;
    text-decoration:none;
    font-family: 'Staatliches', cursive;
    font-weight:1;
`


function Shoe({sneaker}){
    const lowestPrices = sneaker.lowestResellPrice
    if(!lowestPrices){
        return <div> sorry no shoes found</div>
    }
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
