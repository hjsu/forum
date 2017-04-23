import React from 'react';
import { connect } from 'react-redux';
import { updateForum } from '../actions/forumActions';
import { updateTopic } from '../actions/topicActions';
import * as constants from '../constants';
import { Link } from 'react-router-dom';

const ForumComponent = (props) => {
  let body = null;
  switch (props.status) {
    case constants.NOT_LOADED:
      body = 'Loading...'
      props.update(props.id)
      break;
    case constants.LOADING:
      body = 'Loading...'
      break;
    case constants.LOAD_FAILED:
      body = 'Failed to load'
      break;
    case constants.LOADED:
      body = (
        <ul>
          {
            props.topics.map(topic => {
              return <li> 
                <Link 
                  onClick={() => {props.updateTopic(topic.id)}} 
                  to={`/topics\/${topic.id}`}
                  > 
                    {topic.title}   
                </Link> 
                  <span>  by {topic.author}</span>
              </li>
            })
          }
        </ul>
      );
    default:
      break;
  }
  return (
    <div>
      <h1>{props.name}</h1>
      {body}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {...state.forum, id: ownProps.match.params.id}
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id) =>  {dispatch(updateForum(id))},
    updateTopic: (id) => {dispatch(updateTopic(id))}
  }
}

export const Forum = connect(mapStateToProps, mapDispatchToProps)(ForumComponent);
