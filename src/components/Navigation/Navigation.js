import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div >
            <nav>
                <ul>
                    <h3>PORTFOLIO</h3>
                    <li><a href="#home">Profile</a></li>
                    <li><a href="#news">Interests</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{ style: 'float:right' }}><a class="active" href="#about">About</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;