import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = ['username', 'password'];

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Введите Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Введите корректный Email';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать не меньше 6 знаков';
  }
  return errors;
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.auth(
      this.props.values,
      this.props.closeModal
    );
  }

  render() {
    const { fields: { username, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="panel-default">
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Email" {...username} />
            {username.touched && username.error && <label className="error">{username.error}</label>}
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input type="password" className="form-control" placeholder="Пароль" {...password} />
            {password.touched && password.error && <label className="error">{password.error}</label>}
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block btn-lg btn-default waves-effect waves-light w-lg m-b-5"
          >
            <span>Войти</span>
          </button>
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(SignInForm);

