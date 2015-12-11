import React from 'react';
import MarkerClusterer from './MarkerClusterer';
import defaultMapConfiguration from './defaultMapConfiguration';
import marker from './marker';
import hotelInfoHtml from './hotelInfoHtml';

/* global global */

const UNIT_TESTING = (typeof global.describe === 'function');

function newInfoWindow(hotel) {
    const maps = global.window.google.maps;

    return new maps.InfoWindow({content: hotelInfoHtml(hotel)});
}

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
        this.applyClustering();
    },

    applyClustering() {
        const markers = this.markers();
        const clusterer = new MarkerClusterer(this.map, markers, {gridSize: 30});

        clusterer.fitMapToMarkers(this.map, markers);
    },

    markers() {
        return this.props.hotels.map(hotel => {
            const result = marker(hotel.geolocation);

            result.addListener('click', () => {
                newInfoWindow(hotel).open(this.map, result);
            });

            return result;
        });
    }
});
