import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const List = () => {
  const friends = [
    {name: 'Samir'},
    {name: 'Sujan'},
    {name: 'Arjun'},
    {name: 'Sumit'},
  ];

  return (
    <FlatList
      horizontal
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
    marginVertical: 200,
  },
});

export default List;
