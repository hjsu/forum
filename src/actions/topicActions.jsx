import * as constants from '../constants';
import { api } from '../util/api';

export const updateTopic = (id) => {
  return dispatch => {
    dispatch({type: constants.UPDATE_TOPIC});
    api.topicPosts(id)
      .then(res => {
        dispatch({
          type: constants.UPDATE_TOPIC_SUCCESS,
          title: res.title,
          posts: res.posts
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_TOPIC_FAILED});
      });
  }
}
