import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='Card'>
            <h4>{props.heading}</h4>
            <p>{props.details}</p>
            <p>{props.references}</p>
        </div>
    );
}

export default Card;