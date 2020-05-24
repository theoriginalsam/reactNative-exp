import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const List = () => {
  const [colors, setColors] = useState([], 0);
  return (
    <View>
      <Button
        title="Add a Color "
        onPress={() => {
          setColors([...colors, generateC()], colors.length);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{height: 100, width: 120, backgroundColor: generateC()}}>
              <Text>{colors.length}</Text>
            </View>
          );
        }}
      />
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
