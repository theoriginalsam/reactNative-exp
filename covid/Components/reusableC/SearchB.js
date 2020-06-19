import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchB = ({task, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.searchStyle}>
      <Icon style={styles.iconS} name="plus" color="#ccc" size={30} />

      <TextInput
        placeholder="Add a Task"
        style={styles.textInput}
        value={task}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyle: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,

    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
  },
  iconS: {
    alignSelf: 'center',
  },
});

export default SearchB;
