import React, { Component } from 'react';
import SquareView from '../../components/Design/square/SquareView';

class Square extends Component {
    data = {
        logoImg: require('../../assets/square-brandmark.svg'),
        logoTxt: require('../../assets/square-logotext.svg')
    }
    render() {
        console.log('square render');
        return (
            <div>
                <SquareView data={this.data}/>
            </div>
        );
    }
}

export default Square;