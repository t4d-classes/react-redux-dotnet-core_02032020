import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
    { id: 1, name: 'red' },
    { id: 2, name: 'white' },
    { id: 3, name: 'blue' },
    { id: 4, name: 'black' },
];

ReactDOM.render(
    <>
        <ColorTool colors={colorList} />
        <CarTool />
    </>,
    document.querySelector('#root'),
);

