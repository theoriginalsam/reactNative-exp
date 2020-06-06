import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View>
      <Text>Account</Text>
      <Button
        title="LogOut"
        onPress={() => {
          navigation.navigate('Signin');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
