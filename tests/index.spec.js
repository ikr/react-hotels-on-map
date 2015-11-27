import assert from 'assert';
import api from '../src/index';

describe('public API', () => {
    it('is a function', () => {
        assert.strictEqual(typeof api, 'function');
    });
});
