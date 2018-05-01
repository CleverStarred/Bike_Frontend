import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile';

const rootReducer = combineReducers({
  profile: profileReducer,
  form: formReducer
});

export default rootReducer;
