import { AUTH, GETPROFILE, REG } from '../constants/profile';
import objectAssign from 'object-assign';

const initialState = {
  isAuth: false,
  isFetched: false,
  error: ''
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      if (action.payload.error) {
        window.toastr.error(action.payload.error);
      }
      return objectAssign({}, state, action.payload);
    case REG:
      if (action.payload.error) {
        window.toastr.error(action.payload.error);
      }
      return objectAssign({}, state, action.payload);
    case GETPROFILE:
      if (action.payload.error) {
        window.toastr.error(action.payload.error);
      }
      return objectAssign({}, state, action.payload);
    default:
      return state;
  }
}

export default profileReducer;
