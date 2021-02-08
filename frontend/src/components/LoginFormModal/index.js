import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import styled from 'styled-components'

const LoginButton = styled.button`
  width:75px;
  margin-bottom:4px;
  margin-top:4px;
  border:solid 1px lightgrey;
  background-color:#FCFAF0;
  color:grey;
  font-family: 'Staatliches', cursive;
  font-weight:100;
  box-shadow: 0 1px 2px 0px rgba(0,0,0,0.6);
  &:hover{
    border:solid 0.5px lightgrey;
    box-shadow: 0 3px 9px 0px rgba(0,128,0,0.6);
    color:green;
  }
`;

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LoginButton onClick={() => setShowModal(true)}>Log In</LoginButton>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
