import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  return <MapView style={styles.map} />;
};

const styles = StyleSheet.create({
  map: {
    height: 500,
  },
});

export default Map;
