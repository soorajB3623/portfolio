import React from 'react';
import MyImage from '../../assets/pic.JPG';
import './Image.css';
import Typewriter from '../ImageBackground/Typewriter/Typewriter';
import Aux from '../hoc/Aux';
import Button from '../UI/Button/Button';

function ImageBackground(props) {
    return (
        <Aux>
            <div className='Image'>
                <img src={MyImage} alt="Error Loading Background" />
                <Typewriter content={'Hi I am Sooraj Bhaskaran'} />
            </div>
            <h3 id='develop'>Engineer/ Developer</h3>
            <Button click >Resume</Button>
        </Aux>


    );
}

export default ImageBackground;