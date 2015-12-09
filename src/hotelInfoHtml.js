function starText(value) {
    let result = '';

    for (let i = 0; i < value; i = i + 1) {
        result = `${result}*`;
    }

    return result;
}

function selfClosedTag(tagName) {
    return `<${tagName}/>`;
}

function nonEmptyItems(xs) {
    return xs.filter(x => x.length > 0);
}

function addressLine(streetAddress, postalCode, cityLocalized) {
    return nonEmptyItems([streetAddress, [postalCode, cityLocalized].join(' ')]).join(', ');
}

export default ({
    ratingStars,
    name,
    streetAddress,
    postalCode,
    cityLocalized
}) => nonEmptyItems([
    starText(ratingStars),
    name,
    addressLine(streetAddress, postalCode, cityLocalized)
]).join(selfClosedTag('br'));
