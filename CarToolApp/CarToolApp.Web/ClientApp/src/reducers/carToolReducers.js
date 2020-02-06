import { combineReducers } from 'redux';

import { APPEND_CAR_ACTION, REFRESH_SITE_INFO_DONE_ACTION } from '../actions/carToolActions';

const siteInfoReducer = (siteInfo = {}, action) => {

  if (action.type === REFRESH_SITE_INFO_DONE_ACTION) {
    return action.payload.siteInfo;
  }

  return siteInfo;
};


const carsReducer = (cars = [], action) => {

  if (APPEND_CAR_ACTION === action.type) {
    return cars.concat({
      ...action.payload.car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    });
  }

  return cars;

};

// export const carToolReducer = (state, action) => {
//   return {
//     cars: carsReducer(state.cars, action),
//     siteInfo: siteInfoReducer(state.siteInfo, action),
//   };
// };

export const carToolReducer = combineReducers({
  cars: carsReducer,
  siteInfo: siteInfoReducer,
});