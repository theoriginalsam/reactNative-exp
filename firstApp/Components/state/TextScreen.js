import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <Text>Hello</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default TextScreen;
