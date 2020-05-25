import React, {useReducer, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ColorS from '../reusableC/ColorScreen';

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const ColorDisplay = () => {
  const [inc, setInc] = useState(10);
  const [state, dispatch] = useReducer(reducer, {
    red: 100,
    green: 230,
    blue: 170,
  });
  const {red, green, blue} = state;
  return (
    <View>
      <ColorS
        color="red"
        onIncrease={() => {
          dispatch({colorToChange: 'red', amount: inc});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'red', amount: -inc});
        }}
      />
      <ColorS
        color="green"
        onIncrease={() => {
          dispatch({colorToChange: 'green', amount: inc});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'green', amount: -inc});
        }}
      />
      <ColorS
        color="blue"
        onIncrease={() => {
          dispatch({colorToChange: 'blue', amount: inc});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'blue', amount: -inc});
        }}
      />

      <View
        style={{
          height: 100,
          width: 500,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}>
        <Text>
          {red},{green},{blue}
        </Text>
      </View>
      <View>
        <Text>Increment by {inc}</Text>
        <Button title="increase" onPress={() => setInc(inc + 1)} />
        <Button title="Decrease" onPress={() => setInc(inc - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorDisplay;
