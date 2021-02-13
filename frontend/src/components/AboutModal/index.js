import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import AboutPage from './aboutPage';
import styled from 'styled-components';

const AboutButton = styled.h3`
text-decoration:none;
  color:grey;
  font-family: 'Staatliches', cursive;
  font-weight:3;
  cursor:pointer;

  &:hover{
    color:green;
    font-size:20px;
  }
`

function AboutModal (){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <AboutButton onClick={()=> setShowModal(true)}>About</AboutButton>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <AboutPage />
            </Modal>
        )}

        </>
    )
}

export default AboutModal;
