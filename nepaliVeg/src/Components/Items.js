import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Date from './dateRange';

const Items = ({navigation, results}) => {
  const [dates, setDates] = useState([]);

  var resultName = [];
  for (var i in results.result) {
    resultName[i] = results.result[i].commodityName;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageB}>
        <Image source={require('../../assets/3.jpg')} style={styles.logo} />
      </View>

      <Date />

      <View style={styles.container}></View>
      <FlatList
        data={resultName}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IndScreen', {
                  results: results.result,
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'nowrap',
    backgroundColor: 'white',
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
