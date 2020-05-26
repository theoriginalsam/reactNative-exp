import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchB from '../reusableC/SearchB';

const Search = () => {
  const [string, setString] = useState('');
  return (
    <View>
      <SearchB
        string={string}
        onTermChange={newString => setString(newString)}
        onTermSubmit={() => console.log(`Submitted`)}
      />
      <Text> Searched for {string}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
