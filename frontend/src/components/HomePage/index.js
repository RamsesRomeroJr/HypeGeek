import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPopularShoes } from '../../store/home'
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

`

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularShoes())
    },[dispatch])

    const allShoes = useSelector((state) => state.home.products)

    return (
        <div>
            <ContainerTitle>Trending</ContainerTitle>
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
