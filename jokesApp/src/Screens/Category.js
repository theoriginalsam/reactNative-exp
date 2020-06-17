import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import JokesC from '../JSON/joke.json';

const Category = () => {
  let i = 0;
  var category = [];
  for (i in JokesC) {
    category.push(JokesC[i].category);
  }
  const uniq = [...new Set(category)];
  console.log(uniq);
  return (
    <View>
      <Text h1>BROWSE THROUGH MANY CATEGORIES</Text>
      <FlatList
        style={styles.container}
        numColumns={2}
        data={uniq}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return <Text style={styles.category}>{item}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  category: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    borderBottomEndRadius: 100,
    fontWeight: 'bold',
    fontSize: 20,

    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Category;
