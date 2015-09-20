import * as actionTypes from '../actions/actionTypes';

function fuckState(state = 'fuck',action){
  switch (action.type) {
    case actionTypes.FUCK_CLICK:
      return action.text;
    default:
      return state;
  }
}

export default fuckState;
