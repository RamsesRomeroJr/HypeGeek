import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getSearchResults} from '../../store/searchResults';
import {useHistory} from "react-router-dom";

const Input = styled.input`
    height:35px;
    width: 500px;
    font-size:30px;
    text-align:center;
`

const Search = ()=> {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const onSearch = (e) => {
        e.preventDefault();

        return dispatch(getSearchResults(search))
    }


    return (
        <di>
            <form onSubmit={onSearch}>
                <Input
                    type="text"
                    // className='searchbar fas fa-search'
                    placeholder='Search Sneaker...'
                    onChange={(e) => {
                        setSearch(e.target.value)
                        onSearch(e)
                        // history.push("/search-results")
                    }}
                />

            </form>
        </di>
    )
}

export default Search;
