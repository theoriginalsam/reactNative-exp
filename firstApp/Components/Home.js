import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Start with React</Text>

      <Button title="To the list" onPress={() => navigation.navigate('List')} />
      <Button
        title="To the image Screen"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

export default Home;
