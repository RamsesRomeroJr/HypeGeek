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
  &:hover{
    background-color:green;
    color:#FCFAF0;
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
