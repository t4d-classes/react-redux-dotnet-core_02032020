import React, { useRef, useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars,
  siteInfo,
  onAppendCar: appendCar,
  onRefreshSiteInfo: refreshSiteInfo,
  onRefreshCars: refreshCars,
}) => {

  const defaultControlFocusRef = useRef(null);

  useEffect(function sideEffect() {

    if (defaultControlFocusRef.current) {
      defaultControlFocusRef.current.focus();
    }

    refreshSiteInfo();

    refreshCars();

  }, []);

  return (
    <>
      <ToolHeader headerText={siteInfo.siteName} />
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} ref={defaultControlFocusRef} />
    </>
  );

};


