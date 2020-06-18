import React from 'react';
import {Text} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';
import {Ionicons} from 'react-native-vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './src/Screens/Home';
import Category from './src/Screens/Category';
import Quotes from './src/Screens/Quotes';
import CategoryJokes from './src/Jokes/CategoryJokes';

const switchNavigator = createSwitchNavigator({
  bottomFlow: createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'ShoutOut',
        tabBarIcon: <Ionicons name="md-home" size={20} />,
      },
    },
    Category: createStackNavigator({
      Category: Category,
      CategoryJokes: CategoryJokes,
    }),

    Quotes: Quotes,
  }),
});

export default createAppContainer(switchNavigator);
