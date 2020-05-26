import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.text1Style} />
      <View style={styles.text2Style} />
      <View style={styles.text3Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  text1Style: {
    height: 100,
    width: 100,

    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'yellow',
  },
  text2Style: {
    height: 100,
    width: 100,

    borderWidth: 2,
    borderColor: 'black',
    alignSelf: 'flex-end',
    backgroundColor: 'purple',
  },
  text3Style: {
    height: 100,
    width: 100,

    borderWidth: 2,
    backgroundColor: 'green',
  },
  viewStyle: {
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: 'red',
    height: 220,
  },
});

export default BoxScreen;
