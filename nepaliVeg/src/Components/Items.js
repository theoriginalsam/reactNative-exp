import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image, Button} from 'react-native';

import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import SearchC from '../Components/SearchC';
import Footer from './footer';
const Items = ({navigation, results}) => {
  const [string, setString] = useState('');
  var resultName = [];

  for (var i in results) {
    resultName.push([i]);
  }
  resultName.pop();
  var matched = [];
  console.log(string[0]);
  // console.log(resultName[1][0][0]);
  for (var i in resultName) {
    if (resultName[i][0][0] == string[0]) {
      matched.push(resultName[i]);
    }
  }

  let unique = [...new Set(matched)];
  console.log(unique);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageB}>
          <Image source={require('../../assets/3.jpg')} style={styles.logo} />
        </View>
        <SearchC
          // style={styles.fontS}
          string={string}
          onTermChange={newString => setString(newString)}
        />
        {string.length == 0 ? (
          <View style={styles.container}>
            <FlatList
              data={resultName}
              keyExtractor={item => item}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('IndScreen', {
                        results: results,
                        id: item,
                      });
                    }}>
                    <View>
                      <Text style={styles.items}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <FlatList
              data={unique}
              keyExtractor={item => item}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('IndScreen', {
                        results: results,
                        id: item,
                      });
                    }}>
                    <View>
                      <Text style={styles.items}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 30,
  },

  items: {
    padding: 10,
    textAlign: 'center',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    borderColor: 'grey',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 2,
    marginBottom: 10,
  },
  imageB: {
    backgroundColor: 'grey',
  },
});

export default Items;
