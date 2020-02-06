import React, { useRef, useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars,
  onAppendCar: appendCar,
}) => {

  const defaultControlFocusRef = useRef(null);

  useEffect(function sideEffect() {

    if (defaultControlFocusRef.current) {
      defaultControlFocusRef.current.focus();
    }

  }, []);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} ref={defaultControlFocusRef} />
    </>
  );

};


