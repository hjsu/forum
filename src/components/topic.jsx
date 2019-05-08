import React from 'react';
import { connect } from 'react-redux';
import { updateTopic } from '../actions/topicActions';
import * as constants from '../constants';

const TopicComponent = (props) => {
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
        <div>
        { 
          props.posts.map(post => {
            return (
              <div>
                <div>
                {post.body}
                </div>
                
                <div>
                <br/>
                posted by: {post.user.display_name}
                </div>
                <hr/>
              </div>
            );
          })
        }
        </div>
      );
    default:
      break;
  }
  return (
    <div>
      <h1>{props.title}</h1>
      {body}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {...state.topic, id: ownProps.match.params.id}
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (id) =>  {dispatch(updateTopic(id))}
  }
}

export const Topic = connect(mapStateToProps, mapDispatchToProps)(TopicComponent);
