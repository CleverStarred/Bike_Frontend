import fetch from 'isomorphic-fetch';
import * as types from '../constants/profile';
import config from '../config';
import { getHeaders } from '../utils';

export function fetchProfile() {
  return dispatch => {
    let isError = false;
    const returnObj = { type: types.GETPROFILE, payload: { isFetched: true } };
    if (window.localStorage.jwt) {
      fetch(`${config.baseUrl}/auth/user-data/`,
        { method: 'GET',
          headers: getHeaders()
        })
        .then(response => {
          if (response.status >= 400) {
            window.localStorage.removeItem('jwt');
            returnObj.payload.isAuth = false;
            returnObj.payload.error = 'Server Error';
            isError = true;
            dispatch(returnObj);
          }
          return response.json();
        })
        .then(json => {
          if (!isError) {
            returnObj.payload = json;
            returnObj.payload.isAuth = true;
            returnObj.payload.isFetched = true;
            dispatch(returnObj);
          }
        });
    } else {
      dispatch(returnObj);
    }
  };
}

export function auth(data, successCallback) {
  return dispatch => {
    let isError = false;
    fetch(`${config.baseUrl}/auth/api-token-auth/`,
      { method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
      })
      .then(response => {
        const returnObj = { type: types.AUTH, payload: {} };
        if (response.status >= 400) {
          returnObj.payload.isAuth = false;
          returnObj.payload.error = 'Email or password is incorrect';
          isError = true;
          dispatch(returnObj);
        }
        return response.json();
      })
      .then(json => {
        if (!isError) {
          window.localStorage.setItem('jwt', json.token);
          if (successCallback) {
            successCallback.apply(null);
          }
          dispatch(fetchProfile());
        }
      });
  };
}

export function reg(data, successCallback) {
  return dispatch => {
    let isError = false;
    fetch(`${config.baseUrl}/auth/register-account/`,
      { method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
      })
      .then(response => {
        const returnObj = { type: types.REG, payload: {} };
        if (response.status >= 400) {
          returnObj.payload.isAuth = false;
          returnObj.payload.error = 'Server Error';
          isError = true;
        }
        return response.json();
      })
      .then(json => {
        if (!isError) {
          window.localStorage.setItem('jwt', json.token);
          if (successCallback) {
            successCallback.apply(null);
          }
          dispatch(fetchProfile());
        }
      });
  };
}
