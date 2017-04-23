import * as constants from '../constants';

const defaultState = {
  list: [],
  status: constants.NOT_LOADED
}

export const categories = (state=defaultState, action) => {
  switch(action.type) {
    case constants.RESET_CATEGORIES:
      return {...state, ...defaultState};
    case  constants.UPDATE_CATEGORIES:
      return {...state, status: constants.LOADING};
    case constants.UPDATE_CATEGORIES_FAILED:
      return {...state, list: [], status: constants.LOAD_FAILED};
    case constants.UPDATE_CATEGORIES_SUCCESS:
      return {...state, list: action.categoryList, status: constants.LOADED};
    default:
      return {...state};
  }
}
