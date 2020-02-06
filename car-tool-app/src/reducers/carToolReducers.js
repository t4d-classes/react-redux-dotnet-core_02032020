import { combineReducers } from 'redux';

import { APPEND_CAR_ACTION } from '../actions/carToolActions';


const carsReducer = (cars = [], action) => {

  if (APPEND_CAR_ACTION === action.type) {
    return cars.concat({
      ...action.payload.car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    });
  }

  return cars;

};

export const carToolReducer = combineReducers({
  cars: carsReducer,
})