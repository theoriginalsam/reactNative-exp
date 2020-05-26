import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchB = () => {
  return (
    <View style={styles.searchStyle}>
      <Icon name="search" color="#ccc" size={30} />

      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyle: {
    marginHorizontal: 10,

    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
  },
});

export default SearchB;
