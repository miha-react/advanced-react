import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class UnAuthorized extends Component {
  render() {
    return (
      <div>
        <h1>Unauthorized, please <Link to="/auth/signin/">Sign in</Link></h1>
      </div>
    );
  }
}

UnAuthorized.propTypes = {};
UnAuthorized.defaultProps = {};

export default UnAuthorized;
