import createDataContext from './createDataContext';
import tracerApi from '../api/tracker';

import AsyncStorage from '@react-native-community/async-storage';
// import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error_add':
      return {...state, errorMes: action.payload};

    case 'add_user': // for both sign in and sign out
      return {errorMes: '', token: action.payload};

    case 'clear_msg':
      return {...state, errorMes: ''};
    case 'log_out':
      return {token: null, errorMes: ''};

    default:
      return state;
  }
};
const clearMsg = dispatch => () => {
  console.log('Rins');
  dispatch({type: 'clear_msg'});
};

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await tracerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'add_user', payload: response.data.token});
      navigate('Signin');
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
      dispatch({type: 'add_user', payload: response.data.token});
      navigate('TrackScreen');
      console.log('SignedIN');
      console.log(response.data.token);
    } catch (err) {
      dispatch({type: 'error_add', payload: 'Erro sign in'});
    }
  };
};

const trySignIn = dispatch => async () => {
  const token = AsyncStorage.getItem('token');
  console.log(token);

  if (token) {
    dispatch({type: 'add_user', payload: token});

    navigate('TrackScreen');
  } else {
    navigate('Signin');
  }
};

const signout = dispatch => async () => {
  dispatch({type: 'log_out'});
  AsyncStorage.removeItem('token');
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearMsg, trySignIn},
  {token: null, errorMes: ''},
);
