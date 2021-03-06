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

export const unfavorite = ({styleID, userId}) => async(dispatch) => {
    const res = await fetch(`/api/sneaker/unfavorite/${styleID}`, {
        method: 'POST',
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userId
        })
    })

    dispatch(setFavorites(res.data.userFavorites))
    return res
}

export const userFav = (favorites) => async(dispatch) => {
    // const res = await fetch(`/api/sneaker/userfav/${userId}`)

    dispatch(setFavorites(favorites))

    return favorites
}

    const initialState = {favorites: []};

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
