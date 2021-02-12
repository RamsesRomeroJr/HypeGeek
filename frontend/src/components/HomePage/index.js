import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPopularShoes } from '../../store/home'
import { useHistory } from "react-router-dom";
import Shoe from './shoe.js'
import {resetSneakerInfo} from "../../store/sneaker"

const ShoesContainer = styled.div`
    box-sizing:border-box;
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

const ContainerTitle = styled.h2`
    font-family: 'Staatliches', cursive;
    font-size:40px;
    text-shadow: 0px 1px 3px rgba(0,0,0,0.6);

    &:hover{
        text-shadow: 0 5px 15px 0px rgba(0,128,0,0.9);
    }

`

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getPopularShoes())
        dispatch(resetSneakerInfo())
    },[dispatch])

    const allShoes = useSelector((state) => state.home.products)
    const user = useSelector((state) => state.session.user)
    if(!user){
        history.push(`/`)
    }

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <ContainerTitle>Trending</ContainerTitle>
            </div>
            <ShoesContainer>
                {!allShoes && <h4>Loading...</h4>}
                {allShoes && allShoes.map(shoe => {
                    return <Shoe key={shoe._id} sneaker={shoe}/>
                })}
            </ShoesContainer>
        </div>
    )
}

export default HomePage;
