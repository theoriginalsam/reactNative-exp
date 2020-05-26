import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Child 1</Text>
      <Text style={styles.text2Style}>Child 2 </Text>
      <Text style={styles.text3Style}>Child 3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Style: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  text2Style: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',

    textAlign: 'center',
    position: 'absolute',
  },
  text3Style: {
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
    position: 'absolute',
  },
  viewStyle: {
    borderWidth: 3,

    borderColor: 'red',
    height: 200,
  },
});

export default BoxScreen;
