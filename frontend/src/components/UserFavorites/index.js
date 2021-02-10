import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import {createFavorite, unfavorite, userFav} from '../../store/favorites'
import { useHistory } from "react-router-dom";

function UserFavorites(){
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector((state) => state.session.user)

    if(!user){
        history.push(`/`)
    }

    const userId = useSelector((state)=>state.session.user.id)

    async function getFavorites(){
        let res = await fetch(`/api/sneaker/userFav/${userId}`)

        let favoritesArr = res.data.userFavorites
        dispatch(userFav(favoritesArr))
        for(let i=0; i<favoritesArr.length; i++){

            if(favoritesArr[i]['styleId'] === styleID){
               return setFavorited(true)
            }

        }
        return setFavorited(false)
    }

    useEffect(()=>{
        getFavorites()

    }, [dispatch])

    const favorites = useSelector((state)=> state.favorites.favorites)

    return (
        <div>

        </div>
    )

}

export default UserFavorites;
