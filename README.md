[![Build Status](https://travis-ci.org/ikr/react-hotels-on-map.svg?branch=master)](https://travis-ci.org/ikr/react-hotels-on-map)

# Summary

Presents a set of hotels as clustered markers on Google Map, each with an info window displaying the
hotel name. That's a very simple, narrowly specialized component, tailored for hotels. If you need
something more general, take a look at
[react-google-maps](https://github.com/tomchentw/react-google-maps). Yet another difference from
`react-google-maps` is the React 0.13 support: `react-google-maps` v4+, which is capable of
clustering map markers, requires React 0.14.


# Usage

```javascript
import React from 'react';
import HotelsOnMap from 'hotels-on-map';

const props = {hotels: [{
    name: 'Four Seasons Hotel Des Bergues',
    geolocation: {latitude: 46.206997, longitude: 6.146922}
}, {
    name: 'Hotel Eden',
    geolocation: {latitude: 46.22216, longitude: 6.149029}
}/* ... */]};

React.render(
    <HotelsOnMap {...props}/>,
    global.document.body
);
```
