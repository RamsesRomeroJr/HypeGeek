import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "./HypeGeek-Logo.jpg"
import styled from 'styled-components'
import Search from '../SearchBar/index'

const LoginButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  background-color:#FCFAF0;
  color:grey;
  &:hover{
    background-color:green;
    color:#FCFAF0;
  }
`;

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
      </>
    );
  }

  return (
    <div className='NavBar'>
      <div className='home-Link' >
        <NavLink exact to="/">
          <img src={logo} className="logo"/>
        </NavLink>
      </div>
      <div className="searchBar">
        <Search/>
      </div>
      <div className="login-button">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
