import React from 'react';
import './Colourcomponent.css';
import Card from '../Card/Card';
import Aux from '../../hoc/Aux'

class Colourcomponent extends React.Component {
    state = {
        items: {

        }
    }
    render() {
        return (
            <div className='item'>
                <h3>INTERESTS</h3>
                <br />
                <div className='Coloritem'>
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div >

        );
    }
}

export default Colourcomponent;