import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextScreen = () => {
  const [string, setString] = useState('');
  return (
    <View>
      <Text>Enter a Password</Text>
      <TextInput
        style={styles.input}
        value={string}
        onChangeText={newValue => setString(newValue)}
      />
      <Text>My Name is {string}</Text>
      {string.length < 5 ? <Text>Enter more</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default TextScreen;
