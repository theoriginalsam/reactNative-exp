import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './src/Screens/Home';
import Category from './src/Screens/Category';
import Quotes from './src/Screens/Quotes';
import CategoryJokes from './src/Jokes/CategoryJokes';

const switchNavigator = createSwitchNavigator({
  bottomFlow: createBottomTabNavigator({
    Home: Home,
    JokeSFlow: createStackNavigator({
      Category: Category,
      CategoryJokes: CategoryJokes,
    }),

    Quotes: Quotes,
  }),
});

export default createAppContainer(switchNavigator);
