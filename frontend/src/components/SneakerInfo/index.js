import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { getSneakerInfo } from '../../store/sneaker'
import Sneaker from './sneaker.js'
import Pricing from './pricing.js'

const SneakerInfoContainer = styled.div`
    box-sizing:border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 250px;
    width: 85%;
    margin: 0 auto;
    /* padding-top: 15px;
    padding-bottom: 50px; */
    border-radius:10px;
    border: 1px solid green;
    background-color: white;
    overflow:hidden;
`

function SneakerInfo(){
    const {styleId} = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user)
    if(!user){
        history.push(`/`)
    }

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
