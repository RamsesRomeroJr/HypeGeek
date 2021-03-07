import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import styled from 'styled-components';
import './slider.css'

const Slider = styled.section`
    /* position:relative; */
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:400px){
        height: 25vh;
    }
`

const Image = styled.img`
    /* backUpData Images */
    /* height:175px; */
    height:300px;
    border-radius:10px;

    @media (max-width: 400px){
        height:175px;
    }
`

const ImageSlider = ({images, sneakerInfo}) => {
    const [current, setCurrent] = useState(0)
    const length = images.length

    console.log(length)

    const nextSlide = () =>{
        setCurrent( current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent( current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(images) || images.length <=0){
        return null;
    }
    return(
        <>
        {!length && <Image src={sneakerInfo.thumbnail} />}
        <Slider>
            <IoIosArrowBack className='left-arrow' onClick={prevSlide}/>
            <IoIosArrowForward className='right-arrow' onClick={nextSlide}/>
            {images.map((image, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <Image src={image} alt='sneaker image'/>
                        )}
                    </div>
                )
            })}
        </Slider>
        </>
    )
}

export default ImageSlider;
