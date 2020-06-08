import createDataContext from './createDataContext';
import tracerApi from '../api/tracker';

import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error_add':
      return {...state, errorMes: action.payload};

    case 'add_user':
      return {errorMes: '', token: action.token};

    case 'clear_msg':
      return {...state, errorMes: ''};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await tracerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'add_user', token: response.data.token});
      navigate('TrackScreen');
    } catch (err) {
      dispatch({type: 'error_add', payload: 'Erro sign up'});
    }
  };
};

const signin = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await tracerApi.post('/signin', {email, password});

      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'enter_user', token: response.data.token});
      navigate('TrackScreen');
    } catch (err) {
      dispatch({type: 'error_add', payload: 'Erro sign in'});
    }
  };
};

const clearMsg = dispatch => () => {
  console.log('Rins');
  dispatch({type: 'clear_msg'});
};

const signout = dispatch => {
  return () => {
    //out change state
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearMsg},
  {isSignedIn: false},
);
