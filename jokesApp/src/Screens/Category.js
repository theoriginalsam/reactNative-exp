import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import JokesC from '../JSON/joke.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Category = ({navigation}) => {
  let i = 0;
  var category = [];
  for (i in JokesC) {
    category.push(JokesC[i].category);
  }
  const uniq = [...new Set(category)];
  console.log(uniq);
  return (
    <View>
      {/* <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          margin: 20,
          alignSelf: 'center',
          color: 'blue',
        }}>
        BROWSE THROUGH MANY CATEGORIES
      </Text> */}
      <FlatList
        style={styles.container}
        numColumns={2}
        data={uniq}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return (
            <View style={styles.viewC}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CategoryJokes', {
                    item: item,
                    results: JokesC,
                  });
                }}>
                <Text style={styles.category}>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  category: {
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
  viewC: {
    flex: 1,
  },
});

export default Category;
