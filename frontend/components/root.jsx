import React from 'react';
import { Provider } from 'react-redux';
import RouterContainer from './router_container';

const Root = ({store}) => (
  <Provider store={store}>
    <RouterContainer />
  </Provider>
);

export default Root;
