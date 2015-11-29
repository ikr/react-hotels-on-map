import React from 'react';

export default React.createClass({
    render() {
        return <div className='hotels-on-map'></div>;
    },

    componentDidMount() {
        /* global global */
        const maps = global.window.google.maps;

        new maps.Map(this.getDOMNode(), {
            zoom: 5,
            center: {lat: -34.397, lng: 150.644}
        });
    }
});
