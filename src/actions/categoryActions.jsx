import * as constants from '../constants';
import { api } from '../util/api';

const schema = `
  categories {
    id
    name
    description
    forums {
      id
      name
    }
  }
`

export const updateCategories = () => {
  return dispatch => {
    dispatch({type: constants.UPDATE_CATEGORIES});
    api.graphql(schema)
      .then(res => {
        dispatch({
          type: constants.UPDATE_CATEGORIES_SUCCESS,
          categoryList: res.categories
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_CATEGORIES_FAILED});
      });
  }
}
