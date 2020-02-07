export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST_ACTION';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE_ACTION';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST_ACTION';
export const APPEND_CAR_DONE_ACTION = 'APPEND_CAR_DONE_ACTION';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST_ACTION';
export const DELETE_CAR_DONE_ACTION = 'DELETE_CAR_DONE_ACTION';
export const REFRESH_SITE_INFO_REQUEST_ACTION = 'REFRESH_SITE_INFO_REQUEST';
export const REFRESH_SITE_INFO_DONE_ACTION = 'REFRESH_SITE_INFO_DONE';

export const createAppendCarAction = (car) =>
  ({
    type: APPEND_CAR_ACTION,
    payload: { car },
  });

export const createRefreshSiteInfoRequestAction = () =>
  ({
    type: REFRESH_SITE_INFO_REQUEST_ACTION,
  });

export const createRefreshSiteInfoDoneAction = (siteInfo) =>
  ({
    type: REFRESH_SITE_INFO_DONE_ACTION,
    payload: { siteInfo },
  });

  
export const createRefreshCarsRequestAction = () =>
  ({ type: REFRESH_CARS_REQUEST_ACTION });

export const createRefreshCarsDoneAction = (cars) =>
  ({ type: REFRESH_CARS_DONE_ACTION, payload: { cars } });

export const createAppendCarRequestAction = () =>
  ({ type: APPEND_CAR_REQUEST_ACTION });

export const createAppendCarDoneAction = (cars) =>
  ({ type: APPEND_CAR_DONE_ACTION, payload: { cars } });

export const createDeleteCarRequestAction = () =>
  ({ type: DELETE_CAR_REQUEST_ACTION });

export const createDeleteCarDoneAction = (cars) =>
  ({ type: DELETE_CAR_DONE_ACTION, payload: { cars } });

export const refreshSiteInfo = () => {

  return async (dispatch) => {

    dispatch(createRefreshSiteInfoRequestAction());

    const res = await fetch('/api/siteinfo');
    const siteInfo = await res.json();

    dispatch(createRefreshSiteInfoDoneAction(siteInfo));

  }; 

};

export const refreshCars = () => {

  return async dispatch => {

    dispatch(createRefreshCarsRequestAction());

    const res = await fetch('/api/cars');
    const cars = await res.json();

    dispatch(createRefreshCarsDoneAction(cars));


  };

};

export const appendCar = (car) => {

  return async dispatch => {

    dispatch(createAppendCarRequestAction());

    await fetch('/api/cars', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    dispatch(refreshCars());

  };

};

export const deleteCar = (carId) => {

  return async dispatch => {

    dispatch(createDeleteCarRequestAction());

    await fetch('/api/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });

    dispatch(refreshCars());

  };
  
};

