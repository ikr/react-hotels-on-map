import React from 'react';
import defaultMapConfiguration from './defaultMapConfiguration';

export default React.createClass({
    render() {
        return <div className='hotels-on-map'></div>;
    },

    componentDidMount() {
        /* global global */
        const maps = global.window.google.maps;

        new maps.Map(this.getDOMNode(), defaultMapConfiguration());
    }
});
