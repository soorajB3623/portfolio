import React from 'react';
import Navigation from '../Navigation/Navigation'
import ImageView from '../ImageBackground/Image';
import Colorcomponent from '../UI/Colourcomponent/Colourcomponent';
import './Layout.css';
import About from '../About/About';

function Layout(props) {
    return (
        <div className='Layout'>
            <Navigation />
            <ImageView />
            <Colorcomponent />
            <About />
        </div>
    );
}

export default Layout;