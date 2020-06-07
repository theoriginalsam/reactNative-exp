import React from 'react';
import {Text, Input, Badge, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
  return (
    <View>
      <Text h1>SignUp</Text>
      <Badge status="success" />
      <Input placeholder=" Email" />
      <Input placeholder=" Password" />

      <Button
        title="Sign UP"
        onPress={() => {
          navigation.navigate('bottomFlow');
        }}
      />

      <Button
        title="or Signin"
        type="clear"
        onPress={() => {
          navigation.navigate('SignUP');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
