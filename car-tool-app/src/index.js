import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';
import { CarToolContainer } from './containers/CarToolContainer';

ReactDOM.render(
  <Provider store={carToolStore}>
    <CarToolContainer />
  </Provider>,
  document.getElementById('root'),
);
