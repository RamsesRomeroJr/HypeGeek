import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ShoeContainer = styled.div`
    /* display: inline-block;
    width: auto;
    margin: 50px;
    border: 1px solid #008001;
    border-radius:10px; */
    box-sizing:border-box;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fill,240px);
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 27px;
    margin: 0 auto;
    width: 94%;
    padding-top: 15px;
    padding-bottom: 50px;
`

const ShoeImage = styled.img`
    height: 130px;
`

const ShoeName = styled.h3`
    color: black;

`


function Shoe({sneaker}){

    return(
        <ShoeContainer>
            <NavLink to='/'>
            <ShoeName> {sneaker.shoeName} </ShoeName>
            <ShoeImage src={sneaker.thumbnail} />
            </NavLink>

        </ShoeContainer>
    )
}

export default Shoe;
