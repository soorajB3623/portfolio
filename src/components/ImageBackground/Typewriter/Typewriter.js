import React from 'react';
import  './Typewriter.css';

function Typewriter(props) {
    return (
        <div className='typewriter'>
            <h2>{props.content}</h2>
        </div>
    );
}

export default Typewriter;