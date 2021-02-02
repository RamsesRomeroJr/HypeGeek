import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "./HypeGeek-Logo.jpg"

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
      <div className="login-button">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
