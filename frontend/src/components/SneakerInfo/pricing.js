import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Pricing ({sneakerInfo}){
    let lowestPrices = sneakerInfo.lowestResellPrice

    return(
        <div>
            {Object.keys(lowestPrices).map((keyName, i) => (
                <div>
                    <h3> ${lowestPrices[keyName]} from {keyName} </h3>
                </div>
            ))}
        </div>
    )
}

export default Pricing;
