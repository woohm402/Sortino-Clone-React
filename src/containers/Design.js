import React, { Component } from 'react';
import DesignView from '../components/Design/DesignView';

class Design extends Component {
    data = [
        {
            name: 'square',
            logo: require('../assets/square-brandmark.svg'),
            size: 'small'
        }, {
            name: 'viewfinder',
            logo: require('../assets/viewfinder-logomark.svg'),
            size: 'small'
        }, {
            name: 'bff',
            logo: require('../assets/bff-logo-long.svg'),
            size: 'big'
        }, {
            name: 'teespring',
            logo: require('../assets/teespring-brandmark.svg'),
            size: 'big'
        }, {
            name: 'everdwell',
            logo: require('../assets/everdwell-brandmark.svg'),
            size: 'small'
        }, {
            name: 'bulan',
            logo: require('../assets/bulan-brandmark.svg'),
            size: 'small'
        }, {
            name: 'disqus',
            logo: require('../assets/disqus-logotext.svg'),
            size: 'big'
        }, {
            name: 'marker',
            logo: require('../assets/marker-app-logomark.svg'),
            size: 'big'
        }, {
            name: 'vida',
            logo: require('../assets/vida-mobile-brandmark.svg'),
            size: 'small'
        }, {
            name: 'webdesigner',
            logo: require('../assets/webdesigner-depot-brandmark.svg'),
            size: 'small'
        }, {
            name: 'bento',
            logo: require('../assets/bento-logo.svg'),
            size: 'big'
        }, {
            name: 'instacart',
            logo: require('../assets/instacart-logotext.svg'),
            size: 'big'
        }, {
            name: 'dolody',
            logo: require('../assets/dolody-logomark.svg'),
            size: 'small'
        }, {
            name: 'disqus',
            logo: require('../assets/disqus-brandmark.svg'),
            size: 'small'
        },
    ]

    render() {
        console.log('design render');
        return <DesignView data={this.data} history={this.props.history} />;
    }
}

export default Design;