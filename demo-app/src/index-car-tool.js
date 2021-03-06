import React from 'react';
import ReactDOM from 'react-dom';

// import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

// const colorList = [
//     { id: 1, name: 'red' },
//     { id: 2, name: 'white' },
//     { id: 3, name: 'blue' },
//     { id: 4, name: 'black' },
// ];

const carList = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 100000 },
];

ReactDOM.render(
    <>
        {/* <ColorTool colors={colorList} /> */}
        <CarTool cars={carList} />
    </>,
    document.querySelector('#root'),
);

