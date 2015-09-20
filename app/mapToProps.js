import {fuckClickAC} from './actions/actionsCreators';


export function mapStateToProps(state){
  return {
    fuckState: state.fuckState
  }
}
export function mapDispatchToProps(dispatch){
  return {
    onFuckClick: (text) => dispatch(fuckClickAC(text))
  }
}
