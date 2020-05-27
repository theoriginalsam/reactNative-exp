import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchB from '../reusableC/SearchB';
import axios from 'axios';

const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer xv8YZp0XVFGmT2EhUDY2f0y0fgpDO73IcQ9sj3i-Cee9geaLmBb-byl1WyaToQsCNq56E8cUz77kUemrFmdCvRhN8GCflJfuULwV44dTe48KM8CD7MQtqiY9ZCjOXnYx'
  }
})

const Search = () => {
  const [string, setString] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search?', {
      params: {
        limit: 50,
        term: string,
        location: 'delhi',
      },
    });
    console.log('response');
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchB
        style={styles.fontS}
        string={string}
        onTermChange={newString => setString(newString)}
        onTermSubmit={() => console.log(results)}
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
