import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchB from '../reusableC/SearchB';
import yelp from '../api/yelp';

const Search = () => {
  const [string, setString] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        location: string,
      },
    });
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchB
        style={styles.fontS}
        string={string}
        onTermChange={newString => setString(newString)}
        onTermSubmit={()=> searchApi()}
      />
      <Text> Searched :</Text>
      <Text> {results.length}</Text>
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