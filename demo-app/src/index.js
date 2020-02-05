import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const DELETE_ENTRY_ACTION = 'DELETE_ENTRY';
const CLEAR_ACTION = 'CLEAR';

const initialCalcReducerState = {
  history: [],
};

const calcReducer = (state = initialCalcReducerState, currentAction) => {

  switch (currentAction.type) {
    case ADD_ACTION:
      return {
        ...state,
        history: state.history.concat({
          type: currentAction.type,
          value: currentAction.payload,
        }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: state.history.concat({
          type: currentAction.type,
          value: currentAction.payload,
        }),
      };
    case DELETE_ENTRY_ACTION:
      return {
        ...state,
        history: state.history.filter( (_, i) =>
          i !== currentAction.payload.entryIndex ),
      }
    case CLEAR_ACTION:
        return {
          ...state,
          history: [],
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


const CalcTool = ({ result, history, onAdd, onSubtract, onDeleteEntry }) => {

  const [ numInput, setNumInput ] = useState(0);

  return <form>

    <div>
      Input: <input type="number" onChange={e => setNumInput(Number(e.target.value))} />
    </div>

    <div>
      Result: {result}
    </div>

    <div>
      <button type="button" onClick={() => onAdd(numInput)}>Add</button>
      <button type="button" onClick={() => onSubtract(numInput)}>Subtract</button>
    </div>

    <ol>
      {history.map( (entry, index) =>
        <li key={index}>
          {entry.type} {entry.value}
          <button type="button" onClick={() => onDeleteEntry(index)}>Delete</button>
        </li>)}
    </ol>

    <table>
      <tbody>
        {history.map( (entry, index) =>
          <tr key={index}><td>{entry.type}</td><td>{entry.value}</td></tr>)}
      </tbody>
    </table>

  </form>

};

const createAddAction = (value) => ({ type: ADD_ACTION, payload: value });
const createSubtractAction = (value) => ({ type: SUBTRACT_ACTION, payload: value });
const createDeleteEntryAction = (entryIndex) => ({
  type: DELETE_ENTRY_ACTION,
  payload: { entryIndex }, 
});

const add = value => {
  calcStore.dispatch(createAddAction(value));
};

const subtract = value => {
  calcStore.dispatch(createSubtractAction(value));
};

const deleteEntry = entryIndex => {
  calcStore.dispatch(createDeleteEntryAction(entryIndex));
};

const calcResult = history => {

  return history.reduce( (result, entry) => {

    switch(entry.type) {
      case ADD_ACTION:
        return result + entry.value;
      case SUBTRACT_ACTION:
        return result - entry.value;
      default:
        return 0;
    }

  }, 0);

};

calcStore.subscribe(() => {



  // re-render of the component
  ReactDOM.render(
    <CalcTool
      result={calcResult(calcStore.getState().history)}
      history={calcStore.getState().history}
      onAdd={add} onSubtract={subtract}
      onDeleteEntry={deleteEntry} />,
    document.getElementById('root'),
  );

});


calcStore.dispatch(createAddAction(0));