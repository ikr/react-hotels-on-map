[![Build Status](https://travis-ci.org/ikr/react-hotels-on-map.svg?branch=master)](https://travis-ci.org/ikr/react-hotels-on-map)

# Summary

Presents a set of hotels as clustered markers on Google Map, each with an info window displaying the
hotel summary. That's a very simple, narrowly specialized component, tailored for hotels. If you
need something more general, take a look at
[react-google-maps](https://github.com/tomchentw/react-google-maps). Yet another difference from
`react-google-maps` is the React 0.13 support: `react-google-maps` v4+, which is capable of
clustering map markers, requires React 0.14.


# Usage

```javascript
import React from 'react';
import HotelsOnMap from 'hotels-on-map';

const props = {hotels: [{
    ratingStars: 5,
    name: 'Hôtel InterContinental Genève',
    streetAddress: 'Chemin du Petit-Saconnex 7-9',
    postalCode: '1209',
    cityLocalized: 'Genève',
    geolocation: {latitude: 46.22425, longitude: 6.132383}
}, {
    ratingStars: 3,
    name: 'Hôtel Eden',
    streetAddress: 'Rue de Lausanne 135',
    postalCode: '1202',
    cityLocalized: 'Genève',
    geolocation: {latitude: 46.221928, longitude: 6.148965}
}/* ... */]};

React.render(
    <HotelsOnMap {...props}/>,
    global.document.getElementById('root')
);
```

The code above will display and cluster all the hotel markers on the map, making sure that all the
clustered markers are visible. On a marker click, an info-window with the short hotel information
will be displayed.

## One hotel case

When the length of the `hotels` array is `1`, an info window for the single hotel is displayed
immediately, saving the user a marker click.

# Demo

See the [short example code](https://github.com/ikr/react-hotels-on-map/blob/master/src/demo.js)
with that [sample data](https://github.com/ikr/react-hotels-on-map/blob/master/src/demoData.js)
running [live here.](https://ikr.su/h/react-hotels-on-map/demo/)
