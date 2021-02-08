import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import styled from 'styled-components'

const ProButton = styled.button`
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



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
  };

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
            <ProButton onClick={logout}>Log Out</ProButton>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
