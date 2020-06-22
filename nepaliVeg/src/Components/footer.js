import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text> Work by</Text>
      <Text
        style={{color: 'green'}}
        onPress={() =>
          Linking.openURL('https://www.instagram.com/the_originalsam/')
        }>
        Samir
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'grey',

    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});

export default Footer;
