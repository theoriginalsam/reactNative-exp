import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Screen/Home';
import IndScreen from './src/Components/indItem';
import DateS from './src/Components/dateRange';

const navigator = createStackNavigator(
  {
    Home: Home,
    IndScreen: IndScreen,
    DateS: DateS,
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {headerShown: false},
  },
);

export default createAppContainer(navigator);
