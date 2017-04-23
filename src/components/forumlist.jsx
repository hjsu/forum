import React from 'react';
import { connect } from 'react-redux';
import { updateCategories } from '../actions/categoryActions';
import { updateForum } from '../actions/forumActions.jsx';
import * as constants from '../constants';
import { Link } from 'react-router-dom';

const ForumListComponent = (props) => {
  let body = null;
  switch (props.categories.status) {
    case constants.NOT_LOADED:
      body = 'Loading...'
      props.update()
      break;
    case constants.LOADING:
      body = 'Loading...'
      break;
    case constants.LOAD_FAILED:
      body = 'Failed to load'
      break;
    case constants.LOADED:
      body = props.categories.list.map(cat => {
        return (
          <div>
            <h2> {cat.description} </h2>
            <ul>
              {
                cat.forums.map(forum =>{
                  return (
                    <li> 
                      <Link 
                        to={`/forums\/${forum.id}`}
                        onClick={() => {props.updateForum(forum.id)}}
                      > 
                        {forum.name} 
                      </Link> 
                    </li>
                  );
                })
              }
            </ul>
          </div>
        );
      });
    default:
      break;
  }
  return (
    <div>
      <h1>Welcome to the Forums!</h1>
      {body}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: () =>  {dispatch(updateCategories())},
    updateForum: (id) => {dispatch(updateForum(id))}
  }
}

export const ForumList = connect(mapStateToProps, mapDispatchToProps)(ForumListComponent);
