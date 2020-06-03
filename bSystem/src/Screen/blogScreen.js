import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BlogProvider from '../Context/Blog';
import Icon from 'react-native-vector-icons/FontAwesome';

const blogScreen = ({navigation}) => {
  const {data} = useContext(BlogProvider);

  const id = navigation.getParam('id');
  console.log(id);

  const blogPost = data.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.body}</Text>
    </View>
  );
};

blogScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', {id: navigation.getParam('id')});
        }}>
        <Icon name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default blogScreen;
