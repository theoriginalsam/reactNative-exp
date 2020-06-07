import React, {useState} from 'react';
import {Text, Input, Badge, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text h1>SignUp</Text>
      <Badge status="success" />
      <Input value={email} onChangeText={setEmail} placeholder=" Email" />
      <Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder=" Password"
      />

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
