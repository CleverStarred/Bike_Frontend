import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ProfileActions from '../../../actions/profile';
import SignInForm from './formComponent';

class SignInModal extends Component {

  render() {
    const toggleSignUpModal = () => {
      this.props.closeModal();
      this.props.toggleSignUpModal();
    };
    return (
      <Modal {...this.props} bsSize="small" onHide={this.props.closeModal}>
        <Modal.Body>

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

          <hr />
          <SignInForm
            auth={this.props.auth}
            closeModal={this.props.closeModal}
          />
          <label className="text-left"><a href="#">Забыли пароль?</a></label>
          <label className="text-left">
            Еще не с нами? <a href="#" onClick={toggleSignUpModal}>Регистрация</a>
          </label>
        </Modal.Body>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  toggleSignUpModal: React.PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(SignInModal);

