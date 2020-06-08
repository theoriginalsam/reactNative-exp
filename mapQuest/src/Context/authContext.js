import createDataContext from './createDataContext';
import tracerApi from '../api/tracker';

import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error_add':
      return {...state, errorMes: action.payload};

    case 'add_user':
      return {errorMes: '', token: action.token};

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
      dispatch({type: 'add_user', token: response.data.token});
      navigate('TrackScreen');
      console.log('SignedIN');
      console.log(response.data.token);
    } catch (err) {
      dispatch({type: 'error_add', payload: 'Erro sign in'});
    }
  };
};

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'log_out'});
    navigate('Signin');
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

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearMsg, trySignIn},
  {token: null, errorMes: ''},
);
