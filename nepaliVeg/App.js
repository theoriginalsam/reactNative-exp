import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Screen/Home';
import IndScreen from './src/Components/indItem';

const navigator = createStackNavigator(
  {
    Home: Home,
    IndScreen: IndScreen,
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default createAppContainer(navigator);
