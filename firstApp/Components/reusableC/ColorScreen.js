import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ColorS = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title="IC" onPress={() => onIncrease()} />
      <Button title="DC" onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorS;

//component
