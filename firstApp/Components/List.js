import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const List = () => {
  const friends = [
    {name: 'Samir'},
    {name: 'Friend 2'},
    {name: 'Friend 3'},
    {name: 'Friend 4'},
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default List;
