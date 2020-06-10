import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Permission} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync} from 'expo-location';

import Map from '../Component/map';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  const startTrack = async () => {};

  useEffect(() => {
    startTrack();
  }, []);

  return (
    <View>
      <Text h1>Track Create</Text>
      <Map />
      {err ? <Text>Enable Location</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
