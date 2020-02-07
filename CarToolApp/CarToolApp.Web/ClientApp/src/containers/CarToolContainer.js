import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CarTool } from '../components/CarTool';
import { appendCar, deleteCar, refreshSiteInfo, refreshCars } from '../actions/carToolActions';

export const CarToolContainer = () => {

  const actions = bindActionCreators({
    onAppendCar: appendCar,
    onDeleteCar: deleteCar,
    onRefreshCars:  refreshCars,
    onRefreshSiteInfo: refreshSiteInfo,
  }, useDispatch());

  const data = useSelector(state => ({
    cars: state.cars,
    siteInfo: state.siteInfo,
  }));

  return <CarTool
    {...data}
    {...actions} />;

};