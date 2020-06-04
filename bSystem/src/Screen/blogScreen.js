import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BlogProvider from '../Context/Blog';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BoxShadow} from 'react-native-shadow';

const blogScreen = ({navigation}) => {
  const {data} = useContext(BlogProvider);

  const id = navigation.getParam('id');
  console.log(id);

  const blogPost = data.find(blogPost => blogPost.id === id);

  return (
    <View style={styles.body}>
      <Text style={styles.title}>{blogPost.title}</Text>

      <Text style={styles.content}>{blogPost.body}</Text>
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

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    backgroundColor: 'white',
    padding: 40,
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  content: {
    margin: 20,
    backgroundColor: '#e8e4e1',
    padding: 20,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'red',
    borderRadius: 11,
  },
});

export default blogScreen;
