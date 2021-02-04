import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSneakerInfo } from '../../store/sneaker'
import Sneaker from './sneaker.js'
import Pricing from './pricing.js'

const SneakerInfoContainer = styled.div`
    box-sizing:border-box;
    display: grid;
    grid-template-columns: repeat(auto-fill,140px);
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 0px;
    margin: 0 auto;
    width: 94%;
    padding-top: 15px;
    padding-bottom: 50px;
`

function SneakerInfo(){
    const {styleId} = useParams();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getSneakerInfo(styleId))
    },[dispatch])

    const sneakerInfo = useSelector((state) => state.sneakerInfo)

    return (
        <SneakerInfoContainer>
            <Sneaker />
            <Pricing />
        </SneakerInfoContainer>
    )
}

export default SneakerInfo;
