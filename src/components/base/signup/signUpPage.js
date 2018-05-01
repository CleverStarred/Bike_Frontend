import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ProfileActions from '../../../actions/profile';
import SignUpForm from './formComponent';

class SignUpPage extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel signup-label">
              <h4 className="text-center text-signup-label">Зарeгестрируйте свой акаунт</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-services">
              <div className="panel-heading">
                <h4 className="text-center text-signup">или через сервисы...</h4>
              </div>
              <button
                type="button"
                className="btn btn-block btn-lg btn-info  waves-effect waves-light w-lg m-b-5"
              >
                VK
              </button>
              <button
                type="button"
                className="btn btn-block btn-lg btn-danger waves-effect waves-light w-lg m-b-5"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="btn btn-block btn-lg btn-warning waves-effect waves-light w-lg m-b-5"
              >
                <span>Strava</span>
              </button>
            </div>
            <div className="panel panel-services">
              <h4 className="text-center text-signup">вы магазин...</h4>
              <button
                type="button"
                className="btn btn-block btn-lg btn-danger waves-effect waves-light w-lg m-b-5"
              >
                <span>Создать магазин</span>
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel">
              <div className="auth-stat">
                <span className="auth-stat-icon"><i className="fa fa-user"></i></span>
              </div>
              <div className="panel-heading">
                <h4 className="text-center text-signup">нет ничего проще нашей регистрации...</h4>
              </div>
              <div className="panel-body">
                <SignUpForm
                  reg={this.props.reg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  reg: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch);
}
export default connect(undefined, mapDispatchToProps)(SignUpPage);
