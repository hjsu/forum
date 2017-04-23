import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { categories } from './reducers/categories';
import { forum } from './reducers/forum';
import { topic } from './reducers/topic';

const history = createHistory();

const appReducer = combineReducers({
  categories,
  forum,
  topic,
  routing: routerReducer
});

let store = createStore(
  appReducer,
  applyMiddleware(
    thunk,
    multi,
    routerMiddleware(history)
  )
)

export { store, history };
