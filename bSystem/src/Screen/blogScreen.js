import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BlogProvider from '../Context/Blog';

const blogScreen = ({navigation}) => {
  const {data} = useContext(BlogProvider);

  const id = navigation.getParam('id');

  const blogPost = data.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default blogScreen;
