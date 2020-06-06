import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button
        title="or SignIN"
        onPress={() => {
          navigation.navigate('SignUP');
        }}
      />
      <Button
        title="or Main"
        onPress={() => {
          navigation.navigate('bottomFlow');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
