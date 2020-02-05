import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcTool } from '../components/CalcTool';
import { createAddAction, createSubtractAction, createDeleteEntryAction } from '../actions/calcToolActions';

// const bindActionCreators = (actionMap, dispatchFn) => {
//   return Object.keys(actionMap).reduce( (boundActionsMap, actionKey) => {
//     boundActionsMap[actionKey] = (...params) => dispatchFn(actionMap[actionKey](...params));
//     return boundActionsMap;
//   }, {});
// }

const calcResult = history => {
  return history.reduce( (result, entry) => {
    switch(entry.type) {
      case 'ADD':
        return result + entry.value;
      case 'SUBTRACT':
        return result - entry.value;
      default:
        return 0;
    }
  }, 0);
};


export const CalcToolContainer = () => {

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onDeleteEntry: createDeleteEntryAction,
  }, useDispatch());

  const data = useSelector(state => ({
    result: calcResult(state.history),
    history: state.history,
  }));

  return <CalcTool
    {...data}
    {...actions} />;

};