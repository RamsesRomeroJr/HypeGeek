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
    grid-template-columns: repeat(2,140px);
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 85%;
    margin: 0 auto;
    /* padding-top: 15px;
    padding-bottom: 50px; */
    border-radius:10px;
    background-color: white;
`

function SneakerInfo(){
    const {styleId} = useParams();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getSneakerInfo(styleId))
    },[dispatch])

    const sneakerInfo = useSelector((state) => state.sneaker.sneakerInfo)

    return (
        <div>
            {!sneakerInfo && <h4>Loading...</h4>}
            {sneakerInfo && (
            <SneakerInfoContainer>
                <Sneaker sneakerInfo={sneakerInfo}/>
                <Pricing sneakerInfo={sneakerInfo}/>
            </SneakerInfoContainer>
            )}
        </div>
    )
}

export default SneakerInfo;
