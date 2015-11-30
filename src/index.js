import React from 'react';
import MarkerClusterer from './MarkerClusterer';
import defaultMapConfiguration from './defaultMapConfiguration';
import marker from './marker';

/* global global */

const UNIT_TESTING = (typeof global.describe === 'function');

export default React.createClass({
    propTypes: {hotels: React.PropTypes.array.isRequired},

    render() {
        return <div className='hotels-on-map'></div>;
    },

    componentDidMount() {
        if (UNIT_TESTING) {
            return;
        }

        const maps = global.window.google.maps;

        this.map = new maps.Map(this.getDOMNode(), defaultMapConfiguration());

        const markers = this.markers();
        const clusterer = new MarkerClusterer(this.map, markers, {gridSize: 30});

        clusterer.fitMapToMarkers(this.map, markers);
    },

    markers() {
        return this.props.hotels.map(hotel => {
            const maps = global.window.google.maps;
            const result = marker(hotel.geolocation);
            const infoWindow = new maps.InfoWindow({content: hotel.name});

            result.addListener('click', () => {
                infoWindow.open(this.map, result);
            });

            return result;
        });
    }
});
