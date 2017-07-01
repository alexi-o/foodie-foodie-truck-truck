import React, { Component } from 'react';
import { Image } from 'react-native';

var Picture = require('../images/ffttLogo.png');

class Header extends Component {
    render(){
        return(
            <Image
            style={{resizeMode: 'contain', header: 100, backgroundColor: 'red'}}
            source={Picture}
        />
        )
    }
}
export default Header;