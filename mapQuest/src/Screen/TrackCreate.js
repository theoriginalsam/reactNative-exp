import React, {useEffect, useState} from 'react';
import '../_mockLocation';
import {StyleSheet, View} from 'react-native';

import {Text, Input} from 'react-native-elements';

import {watchPositionAsync, Accuracy} from 'expo-location';

import * as Permissions from 'expo-permissions';

import {PermissionsAndroid} from 'react-native';

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
      console.log(granted);
      if (granted === 'granted') {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location denied');
      }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          console.log(location);
        },
      );
    } catch (err) {
      setErr(err);
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
