import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const List = () => {
  return (
    <View>
      <Button title="Add a Color " />
      <View style={{height: 100, width: 120, backgroundColor: generateC()}} />
    </View>
  );
};

const generateC = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default List;
