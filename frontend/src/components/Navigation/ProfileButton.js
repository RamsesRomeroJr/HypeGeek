import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const ProButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  background-color:#FCFAF0;
  color:grey;
  border:solid 0.5px lightgrey;
  box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
  outline:none;
  &:hover{
    color:green;
    border:solid 0.5px lightgrey;
    box-shadow: 0 3px 9px 0px rgba(0,128,0,0.6);

  }
`;



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  if(!user){
    history.push(`/`)
}

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    if(!user){
      history.push(`/`)
  }
};

const favorite = (e) =>{
  e.preventDefault();
  history.push('/favorites')
}

  return (
    <>
      <ProButton onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </ProButton>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
          <ProButton onClick={favorite}>Favorites</ProButton>
          </li>
          <li>
            <ProButton onClick={logout}>Log Out</ProButton>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
