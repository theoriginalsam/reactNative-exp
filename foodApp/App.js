import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Components/Home';
import Search from './Components/Screen/Search';

const navigator = createStackNavigator(
  {
    Home: Search,
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
