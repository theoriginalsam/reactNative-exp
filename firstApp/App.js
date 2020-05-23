import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Home';
import List from './Components/List';
import ImageScree from './Components/ImageScree';
import React from 'react';

const navigator = createStackNavigator(
  {
    Home: Home,
    List: List,
    Image: ImageScree,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
