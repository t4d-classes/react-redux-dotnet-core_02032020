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
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const editCar = carId => {
    setEditCarId(carId);
  }

  const replaceCar = car => {

    const newCars = cars.concat();
    const carIndex = cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);

  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={replaceCar} onCancelCar={() => setEditCarId(-1)}  />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};


