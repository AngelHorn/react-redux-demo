import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//根reducer
import rootReducer from './rootReducer';
//根组件
import RootComponent from './RootComponent';


//根据根reducer建立store
let store = createStore(rootReducer);

React.render(
    <Provider store={store}>
        {() =>
            <RootComponent />
        }
    </Provider>
    ,
    document.body
);
