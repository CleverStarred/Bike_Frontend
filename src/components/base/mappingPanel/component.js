import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const steps = [
  {
    key: 1,
    name: 'Войти/Зарегестрироваться',
    icon: 'fa fa-user'
  },
  {
    key: 2,
    name: 'Создать объявление',
    icon: 'fa fa-edit'
  },
  {
    key: 3,
    name: 'Подтверждение',
    icon: 'fa fa-check-square-o'
  }
];

class MappingPanelComponent extends Component {


  render() {
    const getStepPanels = () => (
        steps.map(step =>
          <div className="col-md-4">
            <div className="auth-stat">
              <span className={this.props.step === step.key ? 'state-icon-select' : 'state-icon'}>
                <i className={step.icon}></i>
              </span>
            </div>
            <br />
            <h4 className="text-center text-mapping">Шаг {step.key}</h4>
            <p className="text-center text-mapping">{step.name}</p>
          </div>
        )
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-mapping">
            <div className="row">
              {getStepPanels()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MappingPanelComponent.PropTypes = {
  step: PropTypes.number.isRequired
};

export default MappingPanelComponent;
