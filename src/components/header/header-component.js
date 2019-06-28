import React from 'react';
import { url } from 'inspector';
import { bgImg } from './images/oldRoad'

const container = {
    color: 'blue',
    backgroundImage: url({bgImg}),
    height: 500
};


class Header extends React.Component {
    render () {
        return (
            <div style={container}>
                "Hello Header"
            </div>
            );
    }
}

export default Header;