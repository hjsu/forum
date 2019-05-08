import * as constants from '../constants';
import { api } from '../util/api';

const schema = (id) => `
  forums(id: ${id}) {
    id
    topics {
      id
      title
      author {
        id
        display_name
      }
    }
    name
    description
    parent_forum {
      id
      name
    }
  }
`

export const updateForum = (id) => {
  return dispatch => {
    dispatch({type: constants.UPDATE_FORUM});
    api.graphql(schema(id))
      .then(res => {
        const forum = res.forums[0];
        dispatch({
          type: constants.UPDATE_FORUM_SUCCESS,
          name: forum.name,
          topics: forum.topics,
          description: forum.description,
          parentForumId: forum.parent_forum_id
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_FORUM_FAILED});
      });
  }
}
