import React from 'react';

export const ColorTool = () => {

    const colors = [
        { id: 1, name: 'red' },
        { id: 2, name: 'white' },
        { id: 3, name: 'blue' },
        { id: 4, name: 'black' },
    ];

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colors.map(color =>
                    <li key={color.id}>{color.name}</li>)}
            </ul>
        </>
    );

};


