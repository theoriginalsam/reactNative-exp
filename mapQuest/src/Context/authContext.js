import createDataContext from './createDataContext';

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
  {},
  {isSignedIn: false},
);
