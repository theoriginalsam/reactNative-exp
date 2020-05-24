import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ColorS from '../reusableC/ColorScreen';

const ColorDisplay = () => {
  const [inc, setInc] = useState(10);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  return (
    <View>
      <ColorS
        color="red"
        onIncrease={() => {
          if (red + inc > 256) {
            return;
          } else setRed(red + inc);
        }}
        onDecrease={() => {
          setRed(red - inc);
        }}
      />
      <ColorS
        color="green"
        onIncrease={() => {
          setGreen(green + inc);
        }}
        onDecrease={() => {
          setGreen(green - inc);
        }}
      />
      <ColorS
        color="blue"
        onIncrease={() => {
          setBlue(blue + inc);
        }}
        onDecrease={() => {
          setBlue(blue - inc);
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
      <View>
        <Text>Increment by {inc}</Text>
        <Button title="increase" onPress={() => setInc(inc + 1)} />
        <Button title="decrease" onPress={() => setInc(inc - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorDisplay;

//displays
