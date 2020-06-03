import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import BlogContext from '../Context/Blog';
import Icon from 'react-native-vector-icons/FontAwesome';

const indexScreen = ({navigation}) => {
  const {data, addBlog, deleteBlog} = useContext(BlogContext);

  return (
    <View>
      <Button title="Press" onPress={addBlog} />

      <FlatList
        data={data}
        keyExtractor={blogPosts => blogPosts.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Blog', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                  <Icon style={styles.icon} name="search" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,

    margin: 5,
  },
  title: {
    fontSize: 20,
  },
  icon: {
    fontSize: 24,
  },
});

export default indexScreen;
