import React from 'react';
import HotelsOnMap from './index';

/* global global */

const hotels = [{
    name: 'Hotel Ambassador à l\'Opéra',
    geolocation: {latitude: 47.364338, longitude: 8.547041}
}, {
    name: 'The Dolder Grand',
    geolocation: {latitude: 47.37266, longitude: 8.574215}
}, {
    name: 'Ramada Hotel Zürich City',
    geolocation: {latitude: 47.38238, longitude: 8.500547}
}, {
    name: 'Hotel Swiss Night am Kunsthaus',
    geolocation: {latitude: 47.36918, longitude: 8.551184}
}, {
    name: 'Hotel Wassberg',
    geolocation: {latitude: 47.3267, longitude: 8.6536}
}, {
    name: 'Trafo Hotel',
    geolocation: {latitude: 47.477966, longitude: 8.304228}
}, {
    name: 'Sorell Hotel Arte',
    geolocation: {latitude: 47.41831, longitude: 8.373271}
}, {
    name: 'Hotel Park Hyatt Zurich',
    geolocation: {latitude: 47.36674, longitude: 8.536352}
}, {
    name: 'Sorell Hotel Seefeld',
    geolocation: {latitude: 47.361645, longitude: 8.551362}
}, {
    name: 'Hotel Schweizerhof Zürich',
    geolocation: {latitude: 47.37693, longitude: 8.539398}
}, {
    name: 'Hotel Senator',
    geolocation: {latitude: 47.38939, longitude: 8.522065}
}, {
    name: 'Sorell Hotel Rütli',
    geolocation: {latitude: 47.37615, longitude: 8.544374}
}, {
    name: 'Hotel Platzhirsch',
    geolocation: {latitude: 47.37375, longitude: 8.54397}
}, {
    name: 'Hotel Eden au Lac',
    geolocation: {latitude: 47.36278, longitude: 8.547419}
}, {
    name: 'Kameha Grand Zürich',
    geolocation: {latitude: 47.421684, longitude: 8.560746}
}, {
    name: 'Hotel Seedamm Plaza',
    geolocation: {latitude: 47.203106, longitude: 8.790072}
}, {
    name: 'Hotel Meierhof',
    geolocation: {latitude: 47.26119, longitude: 8.596673}
}, {
    name: 'Hotel Dolder Waldhaus',
    geolocation: {latitude: 47.373108, longitude: 8.569125}
}, {
    name: 'Sorell Hotel Zürichberg',
    geolocation: {latitude: 47.38246, longitude: 8.5669}
}, {
    name: 'Hotel Conti Swiss Q',
    geolocation: {latitude: 47.41261, longitude: 8.402095}
}, {
    name: 'Four Points by Sheraton Sihlcity Zürich',
    geolocation: {latitude: 47.35915, longitude: 8.523142}
}, {
    name: 'Hotel Ascot',
    geolocation: {latitude: 47.36387, longitude: 8.532098}
}, {
    name: 'Blue City Hotel',
    geolocation: {latitude: 47.47792, longitude: 8.306244}
}, {
    name: 'Hotel Belvoir Swiss Q',
    geolocation: {latitude: 47.30599, longitude: 8.55011}
}, {
    name: 'Sorell Hotel Sonnental',
    geolocation: {latitude: 47.396156, longitude: 8.604588}
}, {
    name: 'Steigenberger Hotel Bellerive au Lac',
    geolocation: {latitude: 47.36228, longitude: 8.547396}
}, {
    name: 'Hotel Opera',
    geolocation: {latitude: 47.364285, longitude: 8.547596}
}, {
    name: 'Baur au Lac',
    geolocation: {latitude: 47.367302, longitude: 8.539358}
}, {
    name: 'Hotel Sedartis Swiss Q',
    geolocation: {latitude: 47.29553, longitude: 8.565904}
}, {
    name: 'Hotel Engimatt',
    geolocation: {latitude: 47.3599, longitude: 8.524704}
}, {
    name: 'Romantik Seehotel Sonne',
    geolocation: {latitude: 47.319035, longitude: 8.578894}
}, {
    name: 'Radisson Blu Hotel, Zurich-Airport',
    geolocation: {latitude: 47.45822, longitude: 8.555475}
}, {
    name: 'Hotel Zur Therme',
    geolocation: {latitude: 47.588985, longitude: 8.28793}
}, {
    name: 'Mövenpick Hotel Zürich Airport',
    geolocation: {latitude: 47.439526, longitude: 8.568866}
}, {
    name: 'Hotel Fly Away',
    geolocation: {latitude: 47.45006, longitude: 8.584432}
}, {
    name: 'Hilton Zurich Airport',
    geolocation: {latitude: 47.436897, longitude: 8.571713}
}, {
    name: 'Zurich Youth Hostel',
    geolocation: {latitude: 47.34802, longitude: 8.527802}
}, {
    name: 'Hotel Bristol',
    geolocation: {latitude: 47.37965, longitude: 8.543494}
}, {
    name: 'NH Zürich Airport Hotel',
    geolocation: {latitude: 47.43324, longitude: 8.564604}
}, {
    name: 'Storchen Zürich',
    geolocation: {latitude: 47.37114, longitude: 8.541622}
}, {
    name: 'Hotel du Théâtre',
    geolocation: {latitude: 47.37618, longitude: 8.544732}
}, {
    name: 'Hotel Montana',
    geolocation: {latitude: 47.380814, longitude: 8.53524}
}, {
    name: 'Hotel Welcome Inn',
    geolocation: {latitude: 47.44913, longitude: 8.581508}
}, {
    name: 'Hotel Atlantis by Giardino',
    geolocation: {latitude: 47.36303, longitude: 8.495713}
}, {
    name: 'Hotel Florhof',
    geolocation: {latitude: 47.37231, longitude: 8.548725}
}, {
    name: 'Hotel Scheuble',
    geolocation: {latitude: 47.37446, longitude: 8.544855}
}, {
    name: 'Dorint Airport Hotel Zürich',
    geolocation: {latitude: 47.43679, longitude: 8.567336}
}, {
    name: 'Hotel St. Gotthard',
    geolocation: {latitude: 47.376316, longitude: 8.539158}
}, {
    name: 'Hotel Europe',
    geolocation: {latitude: 47.364185, longitude: 8.547145}
}, {
    name: 'Park Hotel Winterthur Swiss Q',
    geolocation: {latitude: 47.50098, longitude: 8.732851}
}, {
    name: 'Sorell Hotel Rex',
    geolocation: {latitude: 47.384815, longitude: 8.543057}
}, {
    name: 'Swissôtel Zürich',
    geolocation: {latitude: 47.41076, longitude: 8.543684}
}, {
    name: 'Hotel Wellenberg',
    geolocation: {latitude: 47.373016, longitude: 8.543885}
}, {
    name: 'BEST WESTERN PREMIER Hotel Glockenhof',
    geolocation: {latitude: 47.37288, longitude: 8.536589}
}, {
    name: 'Crowne Plaza',
    geolocation: {latitude: 47.3805, longitude: 8.506285}
}, {
    name: 'Walhalla Hotel',
    geolocation: {latitude: 47.38025, longitude: 8.537229}
}, {
    name: 'Park Inn by Radisson Zurich Airport',
    geolocation: {latitude: 47.45128, longitude: 8.540061}
}, {
    name: 'Hotel Adler',
    geolocation: {latitude: 47.37313, longitude: 8.543516}
}, {
    name: 'Sorell Hotel Krone',
    geolocation: {latitude: 47.49944, longitude: 8.727428}
}, {
    name: 'Sorell Hotel Seidenhof',
    geolocation: {latitude: 47.373688, longitude: 8.537305}
}, {
    name: 'Hotel Allegra',
    geolocation: {latitude: 47.44872, longitude: 8.584882}
}];

React.render(<HotelsOnMap hotels={hotels}/>, global.document.getElementById('root'));
