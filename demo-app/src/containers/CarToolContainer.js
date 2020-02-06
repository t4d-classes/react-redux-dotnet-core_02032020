import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CarTool } from '../components/CarTool';
import { createAppendCarAction } from '../actions/carToolActions';

export const CarToolContainer = () => {

  const actions = bindActionCreators({
    onAppendCar: createAppendCarAction,
  }, useDispatch());

  const data = useSelector(state => ({
    cars: state.cars
  }));

  return <CarTool
    {...data}
    {...actions} />;

};