import React from 'react';
import {
  createAppContainer,
  createStackNavigatior,
  createBottonTabNavigator,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';

import SignUp from './src/Screen/SignUp';
import Signin from './src/Screen/Signin';
import TrackCreate from './src/Screen/TrackCreate';
import TrackDetail from './src/Screen/TrackDetail';
import TrackScreen from './src/Screen/TrackScreen';
import Account from './src/Screen/Account';

const switchNavigatior = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUp,
    Signin: Signin,
  }),
  bottomFlow: createBottonTabNavigator({
    TrackFlow: createStackNavigatior({
      TrackScreen: TrackScreen,
      TrackDetail: TrackDetail,
    }),
    TrackCreate: TrackCreate,
    Account: Account,
  }),
});

export default createAppContainer(switchNavigatior);
