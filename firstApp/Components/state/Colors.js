import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const List = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color "
        onPress={() => {
          setColors([...colors, generateC()]);
        }}
      />
      <View style={{height: 100, width: 120, backgroundColor: generateC()}} />
    </View>
  );
};

const generateC = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
  List();
};

const styles = StyleSheet.create({});

export default List;
