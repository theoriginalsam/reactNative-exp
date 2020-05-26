import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Child 1</Text>
      <Text style={styles.textStyle}>Child 2 </Text>
      <Text style={styles.textStyle}>Child 3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  viewStyle: {
    borderWidth: 3,
    flexDirection: 'row',
    borderColor: 'red',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});

export default BoxScreen;
