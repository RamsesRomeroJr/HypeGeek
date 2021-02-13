import React from "react";
import './aboutPage.css'
import {FaAngellist, FaLinkedinIn, FaGithub} from 'react-icons/fa'

function AboutPage (){

    return(
        <div className='aboutContainer'>
            <div className='social-links'>
                <div className='social-btn flex-center' id='angelList'>
                    <FaAngellist className='angel' />

                </div>
                <div className='social-btn flex-center' id='linkedin'>
                    <FaLinkedinIn className='linked' />
                </div>
                <div className='social-btn flex-center' id='github'>
                    <FaGithub className='git' />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
