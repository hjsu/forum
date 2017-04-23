import * as constants from '../constants';
import { api } from '../util/api';

export const updateForum = (id) => {
  return dispatch => {
    dispatch({type: constants.UPDATE_FORUM});
    api.forumTopics(id)
      .then(res => {
        dispatch({
          type: constants.UPDATE_FORUM_SUCCESS,
          name: res.name,
          topics: res.topics,
          description: res.description,
          parentForumId: res.parentForumId
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_FORUM_FAILED});
      });
  }
}
