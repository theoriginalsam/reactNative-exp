import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync} from 'expo-location';

import Map from '../Component/map';

const TrackCreate = () => {
  const [err, setErr] = useState(null);

  const startTrack = async () => {
    try {
      await requestPermissionsAsync();
    } catch (e) {
      setErr(e);
    }
  };
  return (
    <View>
      <Text h1>Track Create</Text>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
