import React from "react";
import styled from "styled-components";
import ImageSlider from './Slider/ImageSlider'

const SneakerContainer = styled.div`
    width: 100%;
`

const SneakerName = styled.h3`
    color: black;
    text-decoration:none;
`

const SneakerImages = styled.img`
    /* flex-shrink: 3; */
    width: 100%;
    margin: 0 auto;
    left:10000px;
`

function Sneaker({sneakerInfo}){

    const sneakerName = sneakerInfo.shoeName;
    const images = sneakerInfo.imageLinks
    return(
        <SneakerContainer>
            <SneakerName>
                {sneakerName}
            </SneakerName>
            {/* <SneakerImages
                src={sneakerInfo.thumbnail}
            /> */}
            <ImageSlider images={images} />
        </SneakerContainer>
    )
}

export default Sneaker;
