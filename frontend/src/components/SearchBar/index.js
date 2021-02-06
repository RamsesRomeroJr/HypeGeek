import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getSearchResults} from '../../store/searchResults';
import {useHistory} from "react-router-dom";

const Input = styled.input`
    height:35px;
    width: 300px;
    font-size:30px;
    text-align:center;
    border-radius:6px;
    border:1px solid green;

    &::-webkit-input-placeholder{
        color:grey;
    }
`

const SearchBox = styled.div`
    width:310px;
    height: 40px;
`

const Search = ()=> {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const onSearch = (e) => {
        e.preventDefault();

        dispatch(getSearchResults(search))
        e.target.reset()
        return history.push("/search-results")
    }


    return (
        <SearchBox>
            <form onSubmit={onSearch}>
                <Input
                    type="text"
                    // className='searchbar fas fa-search'
                    placeholder='Search Sneaker...'
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />

            </form>
        </SearchBox>
    )
}

export default Search;
