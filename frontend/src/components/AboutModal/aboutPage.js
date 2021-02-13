import React from "react";
import './aboutPage.css'

function AboutPage (){

    return(
        <div className='aboutContainer'>
            <div className='social-links'>
                <div className='social-btn flex-center' id='angelList'>
                    <span>u/ramses-romero-jr</span>
                </div>
                <div className='social-btn flex-center' id='linkedin'>
                    <span>in/ramses-romero-jr</span>
                </div>
                <div className='social-btn flex-center' id='github'>
                    <span>RamsesRomeroJr</span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
