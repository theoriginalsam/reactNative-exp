import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ColorS from '../reusableC/ColorScreen';

const ColorDisplay = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  return (
    <View>
      <ColorS
        color="red"
        onIncrease={() => {
          setRed(red + 10);
        }}
        onDecrease={() => {
          setRed(red - 10);
        }}
      />
      <ColorS
        color="green"
        onIncrease={() => {
          setGreen(green + 10);
        }}
        onDecrease={() => {
          setGreen(green - 10);
        }}
      />
      <ColorS
        color="blue"
        onIncrease={() => {
          setBlue(blue + 10);
        }}
        onDecrease={() => {
          setBlue(blue - 10);
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}>
        <Text>
          {red},{green},{blue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorDisplay;
