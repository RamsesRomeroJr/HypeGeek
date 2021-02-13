import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userFav} from '../../store/favorites'
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Shoe from "./shoe"
import {fetch} from '../../store/csrf.js'
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

function UserFavorites(){
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector((state) => state.session.user)

    if(user === null){
        history.push(`/`)
    }

    let userId;
    if (user !== null){
        userId = user.id
    }

    async function getFavorites(){
        let res = await fetch(`/api/sneaker/userFav/${userId}`)
        let favoritesArr = res.data.userFavorites
        dispatch(userFav(favoritesArr))
        return
    }

    useEffect(()=>{
        getFavorites()
        dispatch(resetSneakerInfo())

    }, [dispatch])

    const favorites = useSelector((state)=> state.favorites.favorites)

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <ContainerTitle>Your Favorites</ContainerTitle>
            </div>
            <ShoesContainer>
                {!favorites.length && <h4>No Current Favorites</h4>}
                {favorites && favorites.map(shoe => {
                    return <Shoe key={shoe.id} sneaker={shoe}/>
                })}
            </ShoesContainer>
        </div>
    )

}

export default UserFavorites;
