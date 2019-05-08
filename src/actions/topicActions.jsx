import * as constants from '../constants';
import { api } from '../util/api';

const schema = (id) => `
  topics(id: ${id}) {
    id
    forum_id
    title
    author_id
    posts {
      id
      user {
        display_name
        id
      }
      body
    }
  }
`

export const updateTopic = (id) => {
  return dispatch => {
    dispatch({type: constants.UPDATE_TOPIC});
    api.graphql(schema(id))
      .then(res => {
        console.log(res)
        const topic = res.topics[0];
        dispatch({
          type: constants.UPDATE_TOPIC_SUCCESS,
          title: topic.title,
          posts: topic.posts
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_TOPIC_FAILED});
      });
  }
}
