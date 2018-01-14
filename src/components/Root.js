import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import ProtectedRoute from './common/ProtectedRoute';
import PersonPage from './routes/PersonPage';

class Root extends Component {
  render() {
    return (
      <div>
        <ProtectedRoute path='/admin' component={AdminPage}/>
        <Route path='/auth' component={AuthPage}/>
        <Route path="/people" component={PersonPage}/>
      </div>
    );
  }
}

Root.propTypes = {};
Root.defaultProps = {};

export default Root;

