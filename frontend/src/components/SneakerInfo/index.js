import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { getSneakerInfo } from '../../store/sneaker'
import Sneaker from './sneaker.js'
import Pricing from './pricing.js'
import LineChart from '../LineChart/index.js'
import DataTable from '../LineChart/dataTable.js'
import Description from '../Description/index.js'

const ChartContainer = styled.div`
    box-sizing:border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 15px;
    width: 85%;
    margin: 0 auto;
    /* padding-top: 15px;
    padding-bottom: 50px; */
    border-radius:10px;
    border:solid 0.5px lightgrey;
    box-shadow: 0 1px 5px 0px rgba(0,0,0,0.6);
    background-color: white;
`

const SneakerInfoContainer = styled.div`
    box-sizing:border-box;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-content: center;
    grid-auto-rows: auto;
    /* grid-gap: 150px; */
    width: 85%;
    margin: 0 auto;
    /* padding-top: 15px;
    padding-bottom: 50px; */
    border-radius:10px;
    border:solid 0.5px lightgrey;
    box-shadow: 0 1px 5px 0px rgba(0,0,0,0.6);
    background-color: white;
    overflow:hidden;
`

const InfoContainer = styled.div`
    margin-top:30px;
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
        <div style={{marginTop:'25px'}}>
            {!sneakerInfo && <h4>Loading Sneaker...</h4>}
            {sneakerInfo && (
            <SneakerInfoContainer>
                <Sneaker sneakerInfo={sneakerInfo}/>
                <InfoContainer>
                    <Description sneakerInfo={sneakerInfo}/>
                </InfoContainer>
                <Pricing sneakerInfo={sneakerInfo}/>
            </SneakerInfoContainer>
            )}
            {!sneakerInfo && <h4>Loading Graph...</h4>}
            {sneakerInfo && (
            <ChartContainer>
                <LineChart style={{height:'auto', width:'1000px'}}/>
                <DataTable />
            </ChartContainer>
            )}
        </div>
    )
}

export default SneakerInfo;
