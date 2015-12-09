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

export default ({
    ratingStars,
    name,
    streetAddress,
    postalCode,
    cityLocalized
}) => [
    starText(ratingStars),
    name,
    `${streetAddress}, ${postalCode} ${cityLocalized}`
].filter(part => part.length > 0).join(selfClosedTag('br'));
