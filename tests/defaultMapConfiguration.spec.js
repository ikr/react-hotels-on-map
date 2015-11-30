import assert from 'assert';
import defaultMapConfiguration from '../src/defaultMapConfiguration';

describe('defaultMapConfiguration', () => {
    [
        ['zoom', 7],
        ['center', {lat: 46.8348, lng: 8.21745}],
        ['maxZoom', 19],
        ['scrollwheel', false],
        ['mapTypeId', 'roadmap'],
        ['styles', [{featureType: 'poi.business', stylers: [{visibility: 'off'}]}]]
    ].forEach(([key, value]) => {
        it(`has ${key} of ${JSON.stringify(value)}`, () => {
            assert.deepEqual(defaultMapConfiguration()[key], value);
        });
    });
});
