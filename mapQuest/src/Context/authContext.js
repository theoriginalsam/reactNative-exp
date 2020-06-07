import createDataContext from './createDataContext';
import tracerApi from '../api/tracker';
import Axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
      try{

        const response = await tracerApi.post('/signup',{email,password})
        console.log(response)

      }catch(err){
          console.log(err)
      }

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
