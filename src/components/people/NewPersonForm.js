import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import ErrorField from '../common/ErrorField';
import emailValidator from 'email-validator';

class NewPersonForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" component ={ErrorField}/>
          <Field name="lastName" component ={ErrorField}/>
          <Field name="email" component ={ErrorField}/>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}
function validate({firstName, email}) {
  const errors = {};
  if(!firstName) errors.firstName = 'first name is required';

  if(!email) errors.email = 'email is required';
  else if(!emailValidator.validate(email)) errors.email = 'email is invalid';

  return errors;
}

export default reduxForm({
  form: 'person',
  validate,
})(NewPersonForm);

