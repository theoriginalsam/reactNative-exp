import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Loadi} from 'react-native';
import VegApi from '../api';
import Item from '../Components/Items';
import Items from '../Components/Items';
import {today, sixDay} from '../Components/getDate';

const Home = ({navigation}) => {
  const [results, setResults] = useState([]);
  const searchApi = async () => {
    console.log('Runnig');
    console.log(typeof full5);
    try {
      const response = await VegApi.get('/');

      setResults(response.data);
    } catch (e) {
      console.log('Error');
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return (
    <View>
      <Items navigation={navigation} results={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default Home;
