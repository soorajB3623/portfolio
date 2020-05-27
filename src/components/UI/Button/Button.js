import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className='myButton' onClick={props.click}>{props.children}</button>
    );
}

export default Button;