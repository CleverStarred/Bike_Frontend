import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [
  'first_name', 'last_name', 'username',
  'password', 'confirmPasword',
  'city', 'phoneNumber'
];

const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Введите Имя';
  }
  if (!values.last_name) {
    errors.last_name = 'Введите Фамилию';
  }
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
  if (!values.confirmPasword) {
    errors.confirmPasword = 'Подтвердите пароль';
  } else if (values.confirmPasword !== values.password) {
    errors.confirmPasword = 'Пароли должены совпадать';
  }
  return errors;
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const values = this.props.values;
    values.email = this.props.values.username;
    this.props.reg(
      values,
      this.context.router.goBack
    );
  }

  render() {
    const getRowField = (label, field, type) => (
      <div className="form-group">
        <label className="col-md-3 col-md-offset-1 control-label">{label}</label>
        <div className="col-md-5">
          <input type={type} className="form-control" {...field} />
          {field.touched && field.error && <label className="error">{field.error}</label>}
        </div>
      </div>
    );

    const { fields: {
      first_name, last_name, username,
      password, confirmPasword,
      city, phoneNumber
    }, handleSubmit } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        {getRowField('Имя*', first_name, 'text')}
        {getRowField('Фамилия*', last_name, 'text')}
        {getRowField('Email*', username, 'email')}
        {getRowField('Пароль*', password, 'password')}
        {getRowField('Подтвердите пароль*', confirmPasword, 'password')}
        {getRowField('Город', city, 'text')}
        {getRowField('Телефон', phoneNumber, 'text')}
        <div className="form-group">
          <div className="col-md-5 col-md-offset-4">
            <button
              type="submit"
              className="btn btn-block btn-lg btn-danger waves-effect waves-light w-lg m-b-5"
            >
              <span>Зарегестрироваться</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

SignUpForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  reg: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'SignUpForm',
  fields,
  validate
})(SignUpForm);

