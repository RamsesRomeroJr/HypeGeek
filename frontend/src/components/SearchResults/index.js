import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Shoe from '../HomePage/shoe.js'
import {resetSneakerInfo} from "../../store/sneaker"
import Loading from './loading.gif'

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

    @media (max-width: 430px){
        display: grid;
        grid-template-columns: repeat(2 ,175px);
        grid-auto-rows: auto;
        width: 150px;
        height: 100px;
    }
`

const LoadingImage = styled.img`
    height: 500px;
    align-self:center;
    justify-self: center;

    @media (max-width:430px){
        height: 175px;
    }
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
                {!results && <LoadingImage src={Loading} />}
                {/* {! results.length && <h4>No Shoes Found</h4>} */}
                {results && results.map(sneaker =>{
                    return <Shoe key={sneaker._id} sneaker={sneaker}/>
                })}
            </ShoesContainer>

        </div>
    )
}

export default SearchResults;
