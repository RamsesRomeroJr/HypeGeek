import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import Description from './descriptionPage.js';
import styled from 'styled-components';

const AboutButton = styled.button`
text-decoration:none;
  color:grey;
  font-family: 'Staatliches', cursive;
  font-weight:3;
  cursor:pointer;

  &:hover{
    color:green;
  }
`

function DescriptionModal ({sneakerInfo}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <AboutButton onClick={()=> setShowModal(true)}>More Info</AboutButton>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <Description sneakerInfo={sneakerInfo}/>
            </Modal>
        )}

        </>
    )
}

export default DescriptionModal;
