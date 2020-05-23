import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ImageDetail = props => {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSrc} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
