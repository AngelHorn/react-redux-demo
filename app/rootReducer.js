import {combineReducers} from 'redux';

import fuckState from './reducers/fuckState';

export const reducers = {fuckState};

let rootReducer = combineReducers(reducers);

export default rootReducer;
