import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseComponent from './components/base/component';
import SignUpComponent from './components/base/signup/signUpPage';
import MainPageComponent from './components/main/component';
import AddAdPageComponent from './components/base/addAd/component';

export const urls = {
  index: {
    path: '/'
  },
  signup: {
    path: '/signup'
  },
  addad: {
    path: '/addad'
  }
};


export default (
  <Route path={urls.index.path} component={BaseComponent}>
    <IndexRoute component={MainPageComponent} />
    <Route path={urls.signup.path} component={SignUpComponent} />
    <Route path={urls.addad.path} component={AddAdPageComponent} />
  </Route>
);
