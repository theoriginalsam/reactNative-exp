import {createAppContainer} from 'react-navigation';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Index from './src/Screen/indexScreen';

import {BlogProvider} from './src/Context/Blog';
import blogScreeen from './src/Screen/blogScreen';
import Create from './src/Screen/Create';

const navigator = createStackNavigator(
  {
    Index: Index,
    Blog: blogScreeen,
    Create: Create,
  },

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'BLOG',
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
