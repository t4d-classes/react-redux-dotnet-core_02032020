import { combineReducers } from 'redux';
import {
  ADD_ACTION, SUBTRACT_ACTION, DELETE_ENTRY_ACTION, CLEAR_ACTION
} from '../actions/calcToolActions';

export const historyReducer = (state = [], action) => {

  if ([ADD_ACTION, SUBTRACT_ACTION].includes(action.type)) {
    return state.concat({
      type: action.type,
      value: action.payload,
    });
  }

  if (action.type === DELETE_ENTRY_ACTION) {
    return state.filter( (_, i) => i !== action.payload.entryIndex);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return state;

};

// export const calcReducer = (state = {}, action) => {

//   return {
//     history: historyReducer(state.history, action),
//   };

// };

export const calcReducer = combineReducers({
  history: historyReducer,
});