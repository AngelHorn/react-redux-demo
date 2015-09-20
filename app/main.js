import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import RootComponent from './RootComponent';

let store = createStore(rootReducer);

React.render(
<Provider store={store}>
    {() => <RootComponent />}
</Provider>
 ,
  document.body
);
