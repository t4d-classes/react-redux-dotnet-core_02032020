export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST_ACTION';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE_ACTION';
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

