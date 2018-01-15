import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import EventsPage from './routes/EventsPage';
import ProtectedRoute from './common/ProtectedRoute';
import PersonPage from './routes/PersonPage';

class Root extends Component {
  render() {
    return (
      <div>
        <ProtectedRoute path='/admin' component={AdminPage}/>
        <Route path='/auth' component={AuthPage}/>
        <ProtectedRoute path="/people" component={PersonPage}/>
        <ProtectedRoute path="/events" component={EventsPage}/>
      </div>
    );
  }
}

export default Root;

