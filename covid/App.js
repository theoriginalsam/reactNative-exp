import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Components/Home';


const navigator = createStackNavigator(
  {
    Home: Home,

  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Data',

    },
  },
);

export default createAppContainer(navigator);
