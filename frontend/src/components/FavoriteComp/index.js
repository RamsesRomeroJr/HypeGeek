import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {createFavorite, unfavorite, userFav} from '../../store/favorites'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'


function FavoriteComp({isFavorited, sneakerInfo}){
    const dispatch = useDispatch()
    const userId = useSelector((state)=>state.session.user.id)
    const thumbnail = sneakerInfo.thumbnail

    const {
        shoeName,
        retailPrice,
        styleID
    } = sneakerInfo

    function favoriting (){
        dispatch(createFavorite({shoeName,thumbnail,retailPrice,styleID,userId}))
    }

    return(
        <div>
            {!isFavorited && <FiStar
                onClick={favoriting}
            />}
            {isFavorited && <FaStar />}
        </div>
    )
}

export default FavoriteComp;
