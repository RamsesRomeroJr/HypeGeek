import { fetch } from './csrf.js';

const  SET_SNEAKER = 'sneaker/setSneaker';

const setSneaker = (sneaker) => ({
    type: SET_SNEAKER,
    sneaker
});

export const getSneakerInfo = (styleId) => async(dispatch) => {
    const myHeaders = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      });

    //Old fetch to back end library
    const res = await fetch(`/api/sneaker/info/${styleId}`)
    console.log(res)

    //new fetch
    // fetch("https://sneaks-api.azurewebsites.net/id/" + styleId + '/prices', {
    //       headers: myHeaders,
    //     })
    //     .then(response => {
    //         console.log(response);
    //         dispatch(setSneaker(response.data));

    //     });
    dispatch(setSneaker(res.data));

    return res;
}

export const resetSneakerInfo = () => async(dispatch) => {
    dispatch(setSneaker(null))
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
