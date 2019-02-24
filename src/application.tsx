import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { ForumList } from './components/forumlist.jsx';
import { Forum } from './components/forum.jsx';
import { Topic } from './components/topic.jsx';
import { Header } from './components/header.jsx';
import { Footer } from './components/footer.jsx';
import { store, history } from './store';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header/>
        <Route exact path='/' component={ForumList}/>
        <Route path='/forums/:id' component={Forum}/>
        <Route path='/topics/:id' component={Topic}/>
        <Footer/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('application')
);

// for testing only
window.store = store;
