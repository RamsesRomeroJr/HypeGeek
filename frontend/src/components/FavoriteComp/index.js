import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {createFavorite, unfavorite, userFav} from '../../store/favorites'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import {fetch} from '../../store/csrf.js'
import { useHistory } from "react-router-dom";
import './FavoriteComp.css'

function FavoriteComp({sneakerInfo, Favorite}){
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
        dispatch(userFav(favoritesArr))
        for(let i=0; i<favoritesArr.length; i++){

            if(favoritesArr[i]['styleId'] === styleID){
               return setFavorited(true)
            }

        }
        return setFavorited(false)
    }

    function favoriting (){
        dispatch(createFavorite({shoeName,thumbnail,retailPrice,styleID,userId}))
        setTimeout(()=> { getFavorites() }, 500)
        // getFavorites()
    }
    function unfavoriting (){
        dispatch(unfavorite({styleID, userId}))
        setTimeout(()=> { getFavorites() }, 500)

    }

    useEffect(()=>{
        getFavorites()

    }, [dispatch, favoriting, unfavoriting])

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
