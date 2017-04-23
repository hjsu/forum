import * as constants from '../constants';
import { api } from '../util/api';

export const updateCategories = () => {
  return dispatch => {
    dispatch({type: constants.UPDATE_CATEGORIES});
    api.categoryList()
      .then(res => {
        dispatch({
          type: constants.UPDATE_CATEGORIES_SUCCESS,
          categoryList: res
        })
      })
      .catch(e => {
        dispatch({type: constants.UPDATE_CATEGORIES_FAILED});
      });
  }
}
