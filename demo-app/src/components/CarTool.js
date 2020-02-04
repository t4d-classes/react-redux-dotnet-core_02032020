import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [cars, setCars] = useState(props.cars.concat());

  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(x => x.id), 0) + 1,
    }));
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  const editCar = carId => {
    setEditCarId(carId);
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}  />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};


