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

  return (
    <View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: 'grey', padding: 10}}>
              <Card>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    padding: 10,
                    margin: 10,
                  }}>
                  {item.body}
                </Text>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryJokes;
