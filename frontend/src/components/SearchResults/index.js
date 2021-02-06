import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import styled from 'styled-components';
import Shoe from '../HomePage/shoe.js'

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


const SearchResults = () =>{
    const results = useSelector((state)=> state.searchResults.results);



    return (
        <div>
            <ShoesContainer>
                {!results && <h4>Loading...</h4>}
                {results && results.map(sneaker =>{
                    return <Shoe key={sneaker._id} sneaker={sneaker}/>
                })}
            </ShoesContainer>

        </div>
    )
}

export default SearchResults;
