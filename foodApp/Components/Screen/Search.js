import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchB from '../reusableC/SearchB';
import useResults from '../hooks/useResults'
import ResultList from '../reusableC/resultList'


const Search = ({ navigation }) => {
  const [string, setString] = useState('');
  const [searchApi, results] = useResults()

  const filterByPrice = (price) => {
    return results.filter(results => {
      return results.price === price
    })

  }


  return (
    <>
      <SearchB
        style={styles.fontS}
        string={string}
        onTermChange={newString => setString(newString)}
        onTermSubmit={() => searchApi(string)}
      />



      <ResultList title="Garib" navigation={navigation} results={filterByPrice('$')} />
      <ResultList title="MiddleClass" navigation={navigation} results={filterByPrice('$$')} />
      <ResultList title="Dhani bau ko chora" navigation={navigation} results={filterByPrice('$$$')} />


    </>
  );
};

const styles = StyleSheet.create({
  fontS: {
    fontSize: 20,

  },
});

export default Search;