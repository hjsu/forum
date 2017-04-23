import * as constants from '../constants';

const defaultState = {
  topics: [],
  name: '',
  description: '',
  parentForumId: null,
  status: constants.NOT_LOADED
}

const failedState = {...defaultState, status: constants.LOAD_FAILED}

export const forum = (state=defaultState, action) => {
  switch(action.type) {
    case constants.RESET_FORUM:
      return {...state, ...defaultState};
    case  constants.UPDATE_FORUM:
      return {...state, status: constants.LOADING};
    case constants.UPDATE_FORUM_FAILED:
      return {...state, ...failedState};
    case constants.UPDATE_FORUM_SUCCESS:
      return {...state, 
        topics: action.topics,
        name: action.name,
        description: action.description,
        parentForumId: action.parentForumId,
        status: constants.LOADED
      }
    default:
      return {...state};
  }
}
