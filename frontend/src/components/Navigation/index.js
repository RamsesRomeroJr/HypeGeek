import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import AboutModal from '../AboutModal/index'
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
  box-shadow: 0 2px 1px 0px rgba(0,0,0,0.6);
  cursor: pointer;
  &:hover{
    background-color:green;
    color:#FCFAF0;
  }
`;

const Tabs = styled.div`
  display:flex;
  flex-direction: row;
`

const Doc = styled.a`
  text-decoration:none;
  color:grey;
  font-family: 'Staatliches', cursive;
  font-weight:3;
  cursor:pointer;
  align-self: center;
  padding-left: 50px;
  font-size:20px;
  &:hover{
    color:green;
    font-size:22px;
  }
`

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
      <Tabs>
        <AboutModal />
        <Doc href='https://github.com/RamsesRomeroJr/HypeGeek' target="_blank">Doc</Doc>
      </Tabs>
      <div className="login-button">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
