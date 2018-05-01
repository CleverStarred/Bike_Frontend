require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import store from './store';

import './assets/css/bootstrap.min.css';
import './assets/css/core.css';
import './assets/css/icons.css';
import './assets/css/components.css';
import './assets/css/pages.css';
import './assets/css/menu.css';
import './assets/css/responsive.css';
import './assets/css/style.css';
import './assets/css/custom.css';

import moment from 'moment';
moment.locale('ru');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);

window.toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-bottom-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '200',
  hideDuration: '2000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};
