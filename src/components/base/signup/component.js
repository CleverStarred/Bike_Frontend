import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SignUpModal extends Component {

  render() {
    const toggleSignInModal = () => {
      this.props.closeModal();
      this.props.toggleSignInModal();
    };

    const toSignUpPage = () => {
      this.props.closeModal();
      browserHistory.push('/signup');
    };

    return (
      <Modal {...this.props} bsSize="small" onHide={this.props.closeModal}>
        <Modal.Body>
          <button
            onClick={toSignUpPage}
            type="button"
            className="btn btn-block btn-lg btn-default waves-effect waves-light w-lg m-b-5"
          >
            <span>С помощью Email</span>
          </button>
          <hr />
          <div className="form-group">
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
          <label className="text-left">
            <a href="#">Зарегестрироваться как магазин...</a>
          </label>
          <label className="text-left">
            Уже с нами? <a href="#" onClick={toggleSignInModal}>Войти</a>
          </label>
        </Modal.Body>
      </Modal>
    );
  }
}

SignUpModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  toggleSignInModal: React.PropTypes.func.isRequired
};

export default SignUpModal;
