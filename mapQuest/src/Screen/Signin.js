import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Signin = ({navigation}) => {
  return (
    <View>
      <Text>SignIN</Text>
      <Button
        title="LOGIN"
        onPress={() => {
          navigation.navigate('TrackScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Signin;
