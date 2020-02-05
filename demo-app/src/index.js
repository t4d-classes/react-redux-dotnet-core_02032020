import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { calcToolStore } from './calcToolStore';
import { CalcToolContainer } from './containers/CalcToolContainer';

ReactDOM.render(
  <Provider store={calcToolStore}>
    <CalcToolContainer />
  </Provider>,
  document.getElementById('root'),
);
