import React from 'react';

import { CarViewRow } from './CarViewRow';

export const CarTable = (props) => {

  const deleteCar = carId => {
    props.onDeleteCar(carId);
  }

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.cars.map(car =>
        <CarViewRow key={car.id} car={car}
          onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};