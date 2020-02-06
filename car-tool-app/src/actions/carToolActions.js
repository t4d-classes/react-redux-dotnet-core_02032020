export const APPEND_CAR_ACTION = 'APPEND_CAR';

export const createAppendCarAction = (car) =>
  ({
    type: APPEND_CAR_ACTION,
    payload: { car },
  });
