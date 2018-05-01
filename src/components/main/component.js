import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';

import MainTabsComponent from './tabs/component';
import AddAdButton from '../base/addAd/addAdButton';

class MainPageComponent extends Component {

  render() {
    return (
      <div>
        <MainTabsComponent />
        <div className="row">
          <div className="col-md-9">
            <h5> Everything bike, anywhere, anytime. Bikes for sale online</h5>
            <p>
              BikeExchange is the place to buy or sell any bike, accessory,
              component or part from anyone, anywhere, anytime. Shop and browse through
              41,637 bikes & cycling products for sale from hundreds of bike shops
              and thousands of private sellers Australia-wide.
            </p>
          </div>
          <div className="col-md-3">
            <div className="panel">
              <div className="panel-body">
                <h5 className="text-center">Создайте свое объявление</h5>
                <AddAdButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageComponent;
