import createDataContext from './createDataContext';
import tracerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    //api req
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    //api post req
  };
};

const signout = dispatch => {
  return () => {
    //out change state
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout},
  {isSignedIn: false},
);
