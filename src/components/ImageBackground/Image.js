import React from 'react';
import MyImage from '../../assets/pic.JPG';
import './Image.css';
import Typewriter from '../ImageBackground/Typewriter/Typewriter';
import Aux from '../hoc/Aux';
import Button from '../UI/Button/Button';

class ImageBackground extends React.Component {
    render() {
        return (
            <Aux>
                <div className='Image'>
                    <img src={MyImage} alt="Error Loading Background" />
                    <Typewriter content={'Hi I am Sooraj Bhaskaran'} />
                </div>
                <h3 id='develop'>Engineer/ Developer</h3>
                <a href='https://drive.google.com/file/d/1QGNLWh-OaC-orYMCd35CiKZDSfX46QZg/view?usp=sharing'> <Button click >Resume</Button></a>
            </Aux>


        );
    }
}

export default ImageBackground;