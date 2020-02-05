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

// placed inside event handlers within the component
calcStore.dispatch(createAddAction(1));
calcStore.dispatch(createSubtractAction(2));

// import React from 'react';
// import ReactDOM from 'react-dom';

// let counter = 0;

// // no existing tree, create new
// ReactDOM.render(<div>{counter}</div>, document.getElementById('root'));

// counter++;

// // oh look, I have tree, let's up it
// ReactDOM.render(<div>{counter}</div>, document.getElementById('root'));


// Lab Exercise

/*

1. Create a new component called Calc Tool. In the Calc Tool component, display the following:











2. Connect the Calc Tool component to the Redux store. Remember all state (except for typing into an input field) must be managed in Redux.



*/




