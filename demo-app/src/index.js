import { createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';

const initialCalcReducerState = { result: 0 };

const calcReducer = (state = initialCalcReducerState, currentAction) => {

  switch (currentAction.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + currentAction.payload,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - currentAction.payload,
      };
    default:
      return state;
  }

};


// const createStore = (reducerFn) => {

//   let currentState = undefined;
//   const callbackFns = [];

//   return {
//     getState: () => currentState,
//     subscribe: (callbackFn) => callbackFns.push(callbackFn),
//     dispatch: (action) => {
//       currentState = reducerFn(currentState, action);
//       callbackFns.forEach(cb => cb());
//     },
//   };

// };

const calcStore = createStore(calcReducer);

calcStore.subscribe(() => {

  // re-render of the component

  console.log(calcStore.getState());

});

const createAddAction = (value) => ({ type: ADD_ACTION, payload: value });
const createSubtractAction = (value) => ({ type: SUBTRACT_ACTION, payload: value });

calcStore.dispatch(createAddAction(1));
calcStore.dispatch(createSubtractAction(2));




