import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Components/Home';
import Search from './Components/Screen/Search';
import Tabs from './Components/Screen/TabForRestaurant'

const navigator = createStackNavigator(
  {
    Home: Search,
    Tab: Tabs
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'RestaurantData',

    },
  },
);

export default createAppContainer(navigator);
