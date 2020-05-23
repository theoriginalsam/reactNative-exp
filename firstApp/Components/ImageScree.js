import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ImageDetail from './reusableC/ImageDetail';

const ImageScree = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSrc={require('../assets/forest.jpg')} />
      <ImageDetail title="Beach" imageSrc={require('../assets/beach.jpg')} />
      <ImageDetail
        title="Mountains"
        imageSrc={require('../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScree;
