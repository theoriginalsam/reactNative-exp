import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Home';
import List from './Components/List';
import ImageScree from './Components/ImageScree';
import Counter from './Components/state/Counter';
import Color from './Components/state/Colors';
import ColorD from './Components/state/ColorDisplay';
import TextScreen from './Components/state/TextScreen';
import React from 'react';
import ColorS from './Components/reusableC/ColorScreen';

const navigator = createStackNavigator(
  {
    Home: Home,
    List: List,
    Image: ImageScree,
    Counter: Counter,
    Color: Color,
    ColorD: ColorD,
    TextScreen: TextScreen,
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
