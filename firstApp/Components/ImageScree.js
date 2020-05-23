import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageDetail from './reusableC/ImageDetail';

const ImageScree = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScree;
