import React, {useState, useContext} from 'react';
import {Text, Input, Badge, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {Context} from '../Context/authContext';

const SignUp = ({navigation}) => {
  const {state, signup} = useContext(Context);
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
      {state.errorMes ? <Text>{state.errorMes}</Text> : null}

      <Button
        title="Sign UP"
        onPress={() => {
          signup({email, password});
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
