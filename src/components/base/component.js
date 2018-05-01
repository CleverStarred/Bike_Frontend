import React, { Component, PropTypes } from 'react';
import TopBarComponent from './topbar/component';
import TopMarketingComponent from './topMarketingPanel/component';


class BaseComponent extends Component {
  render() {
    return (
      <div>
        <TopBarComponent />
        <div className="wrapper">
          <div className="container">
            <TopMarketingComponent />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

BaseComponent.PropTypes = {
  children: PropTypes.element.isRequired
};

export default BaseComponent;
