import {createAppContainer} from 'react-navigation';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Index from './src/Screen/indexScreen';

import {BlogProvider} from './src/Context/Blog';
import blogScreeen from './src/Screen/blogScreen';
import Create from './src/Screen/Create';
import Edit from './src/Screen/edit';

const navigator = createStackNavigator(
  {
    Index: Index,
    Blog: blogScreeen,
    Create: Create,
    Edit: Edit,
  },

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Tasker',
    },
  },
);

const APP = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <APP />
    </BlogProvider>
  );
};
