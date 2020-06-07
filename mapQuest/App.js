import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignUp from './src/Screen/SignUp';
import Signin from './src/Screen/Signin';
import TrackCreate from './src/Screen/TrackCreate';
import TrackDetail from './src/Screen/TrackDetail';
import TrackScreen from './src/Screen/TrackScreen';
import Account from './src/Screen/Account';
import {Provider as AuthProvider} from './src/Context/authContext';
import {setNavigator} from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUp,
    SignUP: Signin,
  }),
  bottomFlow: createBottomTabNavigator({
    TrackFlow: createStackNavigator({
      TrackScreen: TrackScreen,
      TrackDetail: TrackDetail,
    }),
    TrackCreate: TrackCreate,
    Account: Account,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
