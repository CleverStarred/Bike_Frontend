import React, { Component, PropTypes } from 'react';
import SignInModal from '../signin/component';
import SignUpModal from '../signup/component';

class TopBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignInModal: false,
      showSignUpModal: false
    };
  }

  toggleSignInModal(state) {
    return (event) => {
      if (event) event.preventDefault();
      this.setState({ showSignInModal: state });
    };
  }

  toggleSignUpModal(state) {
    return (event) => {
      if (event) event.preventDefault();
      this.setState({ showSignUpModal: state });
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div className="navbar navbar-default">
          <div className="container">
            <div className="topbar-left">
              <ul className="list-inline topnav-auth-panel navbar-left pull-left">
                <li className="text-white panel-title ">
                  <a href="" onClick={this.toggleSignInModal(true)}>
                    Вход
                  </a>
                </li>
                <li className="text-white panel-title">
                  <a href="" onClick={this.toggleSignUpModal(true)}>
                    Регистрация
                  </a>
                </li>
              </ul>
              <SignInModal
                show={this.state.showSignInModal}
                closeModal={this.toggleSignInModal(false)}
                toggleSignUpModal={this.toggleSignUpModal(true)}
              />
              <SignUpModal
                show={(this.state.showSignUpModal)}
                closeModal={this.toggleSignUpModal(false)}
                toggleSignInModal={this.toggleSignInModal(true)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default TopBarComponent;
