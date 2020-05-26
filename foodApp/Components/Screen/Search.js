import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchB from '../reusableC/SearchB';

const Search = () => {
  const [string, setString] = useState('');
  return (
    <View>
      <SearchB
        style={styles.fontS}
        string={string}
        onTermChange={newString => setString(newString)}
        onTermSubmit={() => console.log(`Submitted`)}
      />
      <Text> Searched for</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          position: 'absolute',
          top: 55,
          left: 100,
          right: 10,
        }}>
        {string}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontS: {
    fontSize: 20,
  },
});

export default Search;
