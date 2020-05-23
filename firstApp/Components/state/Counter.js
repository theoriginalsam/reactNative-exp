import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Counter = () => {
  var [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
        onHold={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Counter :{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
