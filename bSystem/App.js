import { createAppContainer } from 'react-navigation';
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/Screen/indexScreen';


const navigator = createStackNavigator(
  {
    Index: Index,

  },

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Data',

    },
  },
);

const APP = createAppContainer(navigator);


export default () => {
  return <APP />
}