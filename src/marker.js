/* global global */

export default ({latitude, longitude}) => new global.window.google.maps.Marker({
    position: {lat: latitude, lng: longitude}
});
