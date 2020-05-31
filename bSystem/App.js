import { createAppContainer } from 'react-navigation';
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

export default createAppContainer(navigator);
