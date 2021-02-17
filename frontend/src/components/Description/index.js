import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {RiArrowUpSFill, RiArrowDownSFill} from 'react-icons/ri'

const DesButton = styled.button`
    width:75px;
    height: 35px;
    margin-bottom:4px;
    margin-top:4px;
    border:solid 1px lightgrey;
    background-color:#FCFAF0;
    color:grey;
    border:solid 0.5px lightgrey;
    box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
    outline:none;
    &:hover{
        color:green;
        border:solid 0.5px lightgrey;
        box-shadow: 0 3px 9px 0px rgba(0,128,0,0.6);
    }
`;

const Info = styled.div`
    height: 40px;
    list-style-type: none;
    font-family: 'Staatliches', cursive;
    font-weight:3;
`

function Description({sneakerInfo}){
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);


    const user = useSelector((state)=>state.session.user)

    if(!user){
        history.push(`/`)
    }
    const {
        stockX,
        flightClub,
        goat,
        stadiumGoods
    } = sneakerInfo.lowestResellPrice

    const lowestPrice = Math.min(stockX, flightClub, goat, stadiumGoods)

    const retailPrice = sneakerInfo.retailPrice
    const priceChange =  lowestPrice - retailPrice

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return(
        <>
        <DesButton onClick={openMenu}>
            More Info
        </DesButton>
        {showMenu && (
            <Info>
                <div>${priceChange}</div>
            </Info>
        )}

        </>
    )
}

export default Description;
