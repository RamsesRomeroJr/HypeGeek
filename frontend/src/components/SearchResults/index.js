import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Shoe from '../HomePage/shoe.js'
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


const SearchResults = () =>{
    const results = useSelector((state)=> state.searchResults.results);
    const history = useHistory();
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetSneakerInfo())
    })

    if(!user){
        history.push(`/`)
    }
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
