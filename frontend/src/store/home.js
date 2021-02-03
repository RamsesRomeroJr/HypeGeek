import {fetch} from './csrf.js';

const SET_SHOES = 'shoes/setShoes';

const setShoes = (shoes) => ({
    type: SET_SHOES,
    shoes
});


export const getPopularShoes = () => async(dispatch) => {
    const res = await fetch('/api/sneaker/home');

    console.log(res.data)
    dispatch(setShoes(res.data.products));
    return res;
}

const initialState = { products: null };

function reducer(state = initialState, action){
    // let newState;
    switch (action.type){
        case SET_SHOES:
            const newState = Object.assign({}, state, {products: action.shoes});
            return newState;

        default:
            return state;
    }
}

export default reducer;
