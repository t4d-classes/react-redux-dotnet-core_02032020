import { createStore } from 'redux';

import { calcReducer } from './reducers/calcToolReducer';

export const calcToolStore = createStore(calcReducer);

