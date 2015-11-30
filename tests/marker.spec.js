import assert from 'assert';
import marker from '../src/marker';
import massert from './helpers/massert';

function geolocation() {
    return {latitude: 47.364338, longitude: 8.547041};
}

/* global global */

describe('marker', () => {
    let m;

    beforeEach(() => {
        m = marker(geolocation());
    });

    it('returns an instance of Google Maps Marker', () => {
        assert(m instanceof global.window.google.maps.Marker);
    });

    it('receives the latitude from the passed geolocation', () => {
        massert.floatEqual(m.getPosition().lat(), geolocation().latitude);
    });

    it('receives the longitude from the passed geolocation', () => {
        massert.floatEqual(m.getPosition().lng(), geolocation().longitude);
    });
});
