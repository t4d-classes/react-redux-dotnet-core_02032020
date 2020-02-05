export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const DELETE_ENTRY_ACTION = 'DELETE_ENTRY';
export const CLEAR_ACTION = 'CLEAR';

export const createAddAction = (value) => ({ type: ADD_ACTION, payload: value });
export const createSubtractAction = (value) => ({ type: SUBTRACT_ACTION, payload: value });
export const createDeleteEntryAction = (entryIndex) => ({
  type: DELETE_ENTRY_ACTION,
  payload: { entryIndex }, 
});
export const createClearAction = () => ({ type: CLEAR_ACTION });
