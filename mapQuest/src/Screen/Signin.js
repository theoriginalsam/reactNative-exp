import React, {useState, useContext, useEffect} from 'react';
import {Text, Input, Badge, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {Context} from '../Context/authContext';
import {NavigationEvents} from 'react-navigation';

const Signin = ({navigation}) => {
  const {state, signin, clearMsg} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <NavigationEvents onWillBlur={clearMsg} />
      <Text h1>Signin</Text>
      <Badge status="success" />
      <Input value={email} onChangeText={setEmail} placeholder=" Email" />
      <Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      {state.errorMes ? <Text>{state.errorMes}</Text> : null}

      <Button
        title="Sign IN"
        onPress={() => {
          signin({email, password});
        }}
      />

      <Button
        title="or SignUP"
        type="clear"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Signin;
