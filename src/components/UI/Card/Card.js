import React from 'react';
import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={classes.Card}>
            <h4>{props.heading}</h4>
            <p>{props.details}</p>
            <p>{props.references}</p>
        </div>
    );
}

export default Card;