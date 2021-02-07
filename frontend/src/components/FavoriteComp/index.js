import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {createFavorite, unfavorite, userFav} from '../../store/favorites'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'
import {fetch} from '../../store/csrf.js'


function FavoriteComp({sneakerInfo}){
    const dispatch = useDispatch()
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
                setFavorited(true)
            }

        }
        return
    }

    useEffect(()=>{
        getFavorites()
    }, [dispatch])

    function favoriting (){
        dispatch(createFavorite({shoeName,thumbnail,retailPrice,styleID,userId}))
    }
    function unfavoriting (){
        dispatch(unfavorite({styleID, userId}))
    }

    return(
        <div>
            {!isFavorited && <FiStar
                onClick={favoriting}
            />}
            {isFavorited && <FaStar
                onClick={unfavoriting}
            />}
        </div>
    )
}

export default FavoriteComp;
