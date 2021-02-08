import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {createFavorite, unfavorite, userFav} from '../../store/favorites'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import {fetch} from '../../store/csrf.js'
import { useHistory } from "react-router-dom";
import './FavoriteComp.css'

function FavoriteComp({sneakerInfo}){
    const dispatch = useDispatch()

    const history = useHistory();
    const user = useSelector((state) => state.session.user)
    if(!user){
        history.push(`/`)
    }
    const userId = useSelector((state)=>state.session.user.id)
    const thumbnail = sneakerInfo.thumbnail
    const {
        shoeName,
        retailPrice,
        styleID
    } = sneakerInfo

    const [isFavorited, setFavorited] = useState(false)


    async function getFavorites(){
        let res = await fetch(`/api/sneaker/userFav/${userId}`)
        let favoritesArr = res.data.userFavorites
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

    function favoriting (){
        dispatch(createFavorite({shoeName,thumbnail,retailPrice,styleID,userId}))
        getFavorites()
    }
    function unfavoriting (){
        dispatch(unfavorite({styleID, userId}))
        getFavorites()
    }

    return(
        <div>
            {!isFavorited && <FiStar
                onClick={favoriting}
                className='star unfavorite'
            />}
            {isFavorited && <FaStar
                onClick={unfavoriting}
                className='star favorite'
            />}
        </div>
    )
}

export default FavoriteComp;
