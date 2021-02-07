import { fetch } from './csrf.js'

const SET_FAVORITES = 'favorites/setFavorites';

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    favorites
})

export const createFavorite = ({userId, shoeName, thumbnail, retailPrice, styleID}) =>
    async(dispatch) => {
        const res = await fetch(`/api/sneaker/favorite/${styleID}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                userId,
                shoeName,
                thumbnail,
                retailPrice
            })
        })

        dispatch(setFavorites(res.data.userFavorites))
        return res
    }

export const unfavorite = ({styleId, userId}) => async(dispatch) => {
    const res = await fetch(`/api/sneaker/unfavorite/${styleId}`, {
        method: 'POST',
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userId,
            styleId
        })
    })

    dispatch(setFavorites(res.data.userFavorites))
    return res
}

export const userFav = ({userId}) => async(dispatch) => {
    const res = await fetch(`api/sneaker/userfav/${userId}`)

    dispatch(setFavorites(res.data.userFavorites))

    return res
}

    const initialState = {favorites: null};

    function reducer(state=initialState, action){
        switch(action.type){
            case SET_FAVORITES:
                const newState = Object.assign({}, state, {favorites:action.favorites})
                return newState;
            default:
                return state;
        }
    }

export default reducer;