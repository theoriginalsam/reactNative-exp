import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Screen/search';
import React, {useState} from 'react';
import TaskList from './Components/Screen/TaskList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {foodReducer} from './Components/taskReducer';

const initialState = {
  task: [],
};

const store = createStore(foodReducer);

console.log(store.getState());

const navigator = createStackNavigator(
  {
    Home: Home,
    TaskList: TaskList,
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tasker',
    },
  },
);

const APP = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <APP />
    </Provider>
  );
};
