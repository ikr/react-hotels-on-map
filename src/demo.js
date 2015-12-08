import React from 'react';
import HotelsOnMap from './index';
import demoData from './demoData';

/* global global */

React.render(<HotelsOnMap hotels={demoData}/>, global.document.getElementById('root'));
