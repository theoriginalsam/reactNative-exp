import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from 'react-native-material-ui';

const CategoryJokes = ({navigation}) => {
  const id = navigation.getParam('item');
  const result = navigation.getParam('results');
  console.log(result[1].category);

  const filtered = result.filter((result) => {
    return result.category == id;
  });
  console.log(filtered[2].body);

  return (
    <View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <Card style={{color: 'red'}}>
              <Text>{item.body}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryJokes;
