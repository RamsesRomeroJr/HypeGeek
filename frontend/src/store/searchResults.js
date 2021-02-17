import {fetch} from './csrf.js'

const SET_SEARCH = 'search/setSearch'

const setSearch = (results) => ({
    type: SET_SEARCH,
    results
});

export const getSearchResults = (search) => async(dispatch)=>{
    const res = await fetch(`/api/sneaker/search/${search}`)

    dispatch(setSearch(res.data.products));
    return res;
}

export const resetSearchResults =() => async(dispatch) => {
    dispatch(setSearch(null))
}

const initialState = {results: null};

function reducer(state=initialState, action){
    switch(action.type){
        case SET_SEARCH:
            const newState = Object.assign({}, state, {results: action.results});
            return newState;
        default:
            return state
    }
}

export default reducer;
