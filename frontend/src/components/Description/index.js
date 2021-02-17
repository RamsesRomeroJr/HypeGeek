import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import Description from './descriptionPage.js';
import styled from 'styled-components';

const AboutButton = styled.button`
    text-decoration:none;
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
    box-shadow: 0 1px 5px 0px rgba(0,128,0,0.6);

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
