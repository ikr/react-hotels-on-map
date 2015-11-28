import assert from 'assert';
import React from 'react/addons';
import HotelsOnMap from '../src/index';

const tu = React.addons.TestUtils;

describe('HotelsOnMap -- the public API', () => {
    it('is a React component that can be instantiated as an element', () => {
        assert(tu.isElement(<HotelsOnMap/>));
    });
});
