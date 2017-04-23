import * as constants from '../constants';

const defaultState = {
  posts: [],
  title: '',
  status: constants.NOT_LOADED
}

const failedState = {...defaultState, status: constants.LOAD_FAILED}

export const topic = (state=defaultState, action) => {
  switch(action.type) {
    case constants.RESET_TOPIC:
      return {...state, ...defaultState};
    case  constants.UPDATE_TOPIC:
      return {...state, status: constants.LOADING};
    case constants.UPDATE_TOPIC_FAILED:
      return {...state, ...failedState};
    case constants.UPDATE_TOPIC_SUCCESS:
      return {...state, 
        title: action.title,
        posts: action.posts,
        status: constants.LOADED
      }
    default:
      return {...state};
  }
}
