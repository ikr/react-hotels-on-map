/* global global */

function loadJs(uri, callback) {
    const script = global.document.createElement('script');

    script.src = uri;

    script.onload = () => {
        setTimeout(callback, 0);
    };

    global.document.body.appendChild(script);
}

export default (callback) => {
    loadJs('https://maps.googleapis.com/maps/api/js', callback);
};
