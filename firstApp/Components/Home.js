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
      <Button
        title="To the Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="To the Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="To the ColorD Screen"
        onPress={() => navigation.navigate('ColorD')}
      />
    </View>
  );
};

export default Home;
