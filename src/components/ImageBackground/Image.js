import React from 'react';
import MyImage from '../../assets/pic.JPG';
import  './Image.css';
import Typewriter from '../ImageBackground/Typewriter/Typewriter';

function ImageBackground(props) {
    return (
        <div className='Image'>
            <img src={MyImage} alt="Error Loading Background" />
            <Typewriter content={'Hi I am Sooraj Bhaskaran'}/>
        </div>

    );
}

export default ImageBackground;