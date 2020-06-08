import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Context} from '../Context/authContext';

const Account = ({navigation}) => {
  const {signout} = useContext(Context);
  return (
    <View>
      <Text>Account</Text>
      <Button title="LogOut" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
