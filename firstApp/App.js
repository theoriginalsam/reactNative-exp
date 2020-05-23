import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Home';
import List from './Components/List';
import ImageScree from './Components/ImageScree';
import Counter from './Components/state/Counter';
import React from 'react';

const navigator = createStackNavigator(
  {
    Home: Home,
    List: List,
    Image: ImageScree,
    Counter: Counter,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
