import React from 'react';

export default React.createClass({
    render() {
        return <div className='hotels-on-map'></div>;
    },

    componentDidMount() {
        /* global global */
        const maps = global.window.google.maps;

        new maps.Map(this.getDOMNode(), {
            zoom: 7,
            center: {lat: 46.8348, lng: 8.21745}
        });
    }
});
