import styled from 'styled-components';
import { fetch } from './csrf.js';

const  SET_SNEAKER = 'sneaker/setSneaker';

const setSneaker = (sneaker) => ({
    type: SET_SNEAKER,
    sneaker
});

export const getSneakerInfo = (styleId) => async(dispatch) => {
    const res = await fetch(`/api/sneaker/info/${styleId}`)

    dispatch(setSneaker(res.data.products));
    return res;
}

const initialState = {sneakerInfo: null};

function reducer(state=initialState, action){
    switch(action.type){
        case SET_SNEAKER:
            const newState = Object.assign({}, state, {sneakerInfo: action.sneaker});
            return newState;
        default:
            return state;
    }
}

export default reducer;
