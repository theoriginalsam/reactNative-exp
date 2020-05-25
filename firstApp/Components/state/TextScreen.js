import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextScreen = () => {
  const [string, setString] = useState('Input here');
  return (
    <View>
      <Text>Hello</Text>
      <TextInput
        style={styles.input}
        value={string}
        onChangeText={newValue => setString(newValue)}
      />
      <Text>My Name is {string}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default TextScreen;
