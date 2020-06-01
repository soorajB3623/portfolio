import React from 'react';
import './About.css';
import Aux from '../hoc/Aux';
import github from '../../assets/github.png';
import fb from '../../assets/fb3.png';
import linkedIn from '../../assets/link2.png'

function About() {
    return (

        <div className='About'>
            <Aux>
                <h3 id='about'>About</h3>
                <h3 style={{ marginTop: 50, fontWeight: "lighter", marginLeft: 0 }}>Sooraj Bhaskaran </h3 >
                <div className='imageLogo'>

                    <a href='https://www.facebook.com/surajbhaskaran.p/'><img src={fb} alt='No Facebook' id='social' style={{ height: '30px', width: '30px', marginBottom: '10px', }} /></a>
                    <a href='https://github.com/sura999'> <img src={github} alt='No Github' id='social' /></a>
                    <a href='https://www.linkedin.com/in/sooraj-bhaskaran-2b2780168/'> <img src={linkedIn} style={{ height: '30px', width: '30px', marginBottom: '10px' }} alt='No linkedIn' id='social' /></a>

                </div>
            </Aux>

        </div>



    );
}

export default About;