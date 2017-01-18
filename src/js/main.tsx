import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Thing from './thing'

ReactDOM.render(
    <div className="red"><Thing number={5} /></div>,
    document.getElementById('appBody')
);