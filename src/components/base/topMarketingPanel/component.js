import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class TopMarketingComponent extends Component {

  render() {
    return (
      <div className="row panel-top-maketing">
        <div className="col-md-3">
          <div className="text-left">
            <Link to={'/'}>
              <p className="logo"><i className="md md-directions-bike"></i> <span>LOGO</span></p>
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="panel">
            <span> панель с рекламой</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMarketingComponent;
