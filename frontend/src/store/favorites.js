import { fetch } from './csrf.js'

const SET_FAVORITES = 'favorites/setFavorites';

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    favorites
})

export const createFavorite = ({userId, shoeName, thumbNail, retailPrice, styleId}) =>
    async(dispatch) => {
        const res = await fetch(`/api/sneaker/favorite/${styleId}`)

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
