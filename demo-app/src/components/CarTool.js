import React from 'react';

export const CarTool = () => {

    const cars = [
        { id: 1, make: 'Ford' },
        { id: 2, make: 'Tesla' },
    ];

    return (
        <>
            <header>
                <h1>Car Tool</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    );

};


