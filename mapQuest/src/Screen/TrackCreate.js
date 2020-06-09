import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Permission} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync} from 'expo-location';

import Map from '../Component/map';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  const startTrack = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        alert('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
