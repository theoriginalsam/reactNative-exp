import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, Input} from 'react-native-elements';

import {requestPermissionsAsync} from 'expo-location';
import {Location, Permissions} from 'expo-permissions';

import Map from '../Component/map';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  const startTrack = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Not enabled');
    } else {
      console.log('graneted');
    }
  };

  useEffect(() => {
    startTrack();
  }, []);

  return (
    <View>
      <Text h1>Track Create</Text>
      <Map />
      {err ? <Text>Please enable the location</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
