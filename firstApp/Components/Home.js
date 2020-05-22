import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Start with React</Text>

      <Button title="List" onPress={() => navigation.navigate('List')} />
      <Button title="List2" onPress={() => navigation.navigate('')} />
    </View>
  );
};

export default Home;
