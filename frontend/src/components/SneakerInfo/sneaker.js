import React from "react";
import styled from "styled-components";

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

    let sneakerName = sneakerInfo.shoeName;

    return(
        <SneakerContainer>
            <SneakerName>
                {sneakerName}
            </SneakerName>
            <SneakerImages
                src={sneakerInfo.thumbnail}
            />
        </SneakerContainer>
    )
}

export default Sneaker;
