import * as constants from '../constants';

const defaultState = {
  showSidePanel: false
}

export default (state=defaultState, action) => {
  switch(action.type) {

    case constants.TOGGLE_SIDE_PANEL:
      return {...state, showSidePanel: !state.showSidePanel};
    case constants.OPEN_SIDE_PANEL:
      return {...state, showSidePanel: true};
    case constants.CLOSE_SIDE_PANEL:
      return {...state, showSidePanel: false};
    default:
      return {...state}; 
  }
}
