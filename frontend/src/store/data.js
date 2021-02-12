import { fetch } from './csrf.js';

const SET_DATA = 'data/setData';

const setData = (data) => ({
    type:SET_DATA,
    data
});

export const getData = (styleId) => async(dispatch)=>{
    const res = await fetch(`/api/data/grab/${styleId}`);

    dispatch(setData(res.data.storedData));
    return res;
}

export const saveData = ({styleId, shoeName, lowestPrice, stockxLow, goatLow, flightClubLow, stadiumGoodsLow}) =>
    async(dispatch) => {
        const res = await fetch('api/data/save', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                styleId,
                shoeName,
                lowestPrice,
                stockxLow,
                goatLow,
                stadiumGoodsLow
            })
        })

        dispatch(setData(res.data.storedData))
        return res
    }


const initialState = {data: null};

function reducer(state = initialState, action){
    switch(action.type){
        case SET_DATA:
            const newState = Object.assign({}, state, {data:action.data});
            return newState;
        default:
            return state;
    }
}

export default reducer;
