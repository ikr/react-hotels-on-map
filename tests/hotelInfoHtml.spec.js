import assert from 'assert';
import hotelInfoHtml from '../src/hotelInfoHtml';

function assertContains(haystack, needle) {
    assert(haystack.indexOf(needle) >= 0, `"${needle}" not found in "${haystack}"`);
}

function hotel() {
    return {
        ratingStars: 3,
        name: 'Hôtel Eden',
        streetAddress: 'Rue de Lausanne 135',
        postalCode: '1202',
        cityLocalized: 'Genève'
    };
}

describe('hotelInfoHtml', () => {
    it('is a function', () => {
        assert.strictEqual(typeof hotelInfoHtml, 'function');
    });

    describe('result', () => {
        const result = hotelInfoHtml(hotel());

        [
            '***',
            '<br/>',
            'Hôtel Eden',
            'Rue de Lausanne 135, 1202 Genève'
        ].forEach(needle => {
            it(`contains ${needle}`, () => {
                assertContains(result, needle);
            });
        });
    });

    describe('result for zero star hotel', () => {
        const result = hotelInfoHtml(Object.assign({}, hotel(), {ratingStars: 0}));

        it('contains only one <br/>', () => {
            assert.strictEqual(result.indexOf('<br/>'), result.lastIndexOf('<br/>'));
        });
    });
});
