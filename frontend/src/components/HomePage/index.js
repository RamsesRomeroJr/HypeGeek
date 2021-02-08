import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPopularShoes } from '../../store/home'
import { useHistory } from "react-router-dom";
import Shoe from './shoe.js'

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

`

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getPopularShoes())
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
