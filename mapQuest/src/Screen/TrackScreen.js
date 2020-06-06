import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const TrackScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackScreen</Text>
      <Button
        title="Go to one"
        onPress={() => {
          navigation.navigate('TrackDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackScreen;
