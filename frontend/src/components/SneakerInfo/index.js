import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSneakerInfo } from '../../store/sneaker'

function SneakerInfo(){
    const {styleId} = useParams();

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getSneakerInfo(styleId))
    },[dispatch])
    return (
        <div>
            sneaker Info
        </div>
    )
}

export default SneakerInfo;
