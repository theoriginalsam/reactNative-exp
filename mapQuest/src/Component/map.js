import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++)
    points.push({
      latitude: 28.2096 + i * 0.001,
      longitude: 83.9856 + i * 0.001,
    });
  return (
    <MapView
      initialRegion={{
        latitude: 28.2096,
        longitude: 83.9856,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}>
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500,
  },
});

export default Map;
