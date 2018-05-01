import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class AddAdButton extends Component {

  render() {
    const onClick = () => (
      browserHistory.push('/addad')
    );

    return (
      <button
        type="button"
        onClick={onClick}
        className="btn btn-block btn-lg btn-danger waves-effect waves-light w-lg m-b-5"
      >
        <span>Создать объявление</span>
      </button>
    );
  }
}

export default AddAdButton;
