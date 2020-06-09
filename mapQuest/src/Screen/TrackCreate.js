import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../Component/map';

const TrackCreate = () => {
  return (
    <View>
      <Text h1>Track Create</Text>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
