import assert from 'assert';
import React from 'react/addons';
import mapify from './helpers/mapify';
import massert from './helpers/massert';
import HotelsOnMap from '../src/index';

const tu = React.addons.TestUtils;

before(mapify);

describe('HotelsOnMap -- the public API', () => {
    it('is a React component that can be instantiated as an element', () => {
        assert(tu.isElement(<HotelsOnMap hotels={[]}/>));
    });

    it('requires the `hotels` array property', () => {
        assert.strictEqual(HotelsOnMap.propTypes.hotels, React.PropTypes.array.isRequired);
    });

    describe('HTML', () => {
        let element;

        beforeEach(() => {
            element = tu.renderIntoDocument(<HotelsOnMap hotels={[]}/>).getDOMNode();
        });

        it('declares the top level CSS class', () => {
            massert.cssClass(element, 'hotels-on-map');
        });
    });
});
