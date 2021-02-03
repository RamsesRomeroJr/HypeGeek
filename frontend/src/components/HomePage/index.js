import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPopularShoes } from '../../store/home'

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularShoes())
    },[dispatch])

    return (
    <div>
        <h2>adfsijoojadsf;oj</h2>
    </div>
    )
}

export default HomePage;
