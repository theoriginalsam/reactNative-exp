import React, {useState, useContext, useEffect} from 'react';
import {Text, Input, Badge, Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {Context} from '../Context/authContext';

const resolveScreen = () => {
  const {trySignIn} = useContext(Context);
  useEffect(() => {
    trySignIn();
  }, []);

  return null;
};

export default resolveScreen;
