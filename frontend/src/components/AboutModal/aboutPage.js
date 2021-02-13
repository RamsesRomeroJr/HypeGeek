import React from "react";
import './aboutPage.css'
import {FaAngellist, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import styled from 'styled-components'

const Contact = styled.h1`
    align-self:center;
    justify-content:center;
    font-family: 'Staatliches', cursive;
    font-weight:1000;
`

function AboutPage (){

    return(
        <div className='aboutContainer'>
            <Contact>Contact Info</Contact>
            <div className='social-links'>
                <div className='social-btn flex-center' id='angelList'>
                    <a href='https://angel.co/u/ramses-romero-jr' target='__blank' style={{color:'#333'}}>
                        <FaAngellist className='angel' />
                    </a>

                </div>
                <div className='social-btn flex-center' id='linkedin'>
                    <a href='https://www.linkedin.com/in/ramses-romero-jr/' target='__blank' style={{color:'#333'}}>
                        <FaLinkedinIn className='linked' />
                    </a>
                </div>
                <div className='social-btn flex-center' id='github'>
                    <a href='https://github.com/RamsesRomeroJr' target='__blank' style={{color:'#333'}}>
                        <FaGithub className='git' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
