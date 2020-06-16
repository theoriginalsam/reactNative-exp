import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VegApi from '../api';
import Item from '../Components/Items';
import Items from '../Components/Items';

const Home = ({navigation}) => {
  var date = new Date().getDate() - 1; //Current Date
  var datef = date - 5;
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  if (month < 10) {
    var full = year + '-0' + month + '-' + date;
    var full5 = year + '-0' + month + '-' + datef;
  } else if (date < 10) {
    var full = year + '-' + month + '-0' + date;
    var full5 = year + '-' + month + '-0' + datef;
  } else if (month < 10 && date < 10) {
    var full = year + '-0' + month + '-0' + date;
    var full5 = year + '-' + month + '-0' + datef;
  }
  const [results, setResults] = useState([]);
  const searchApi = async () => {
    console.log('Runnig');
    console.log(typeof full5);
    try {
      const response = await VegApi.get('/', {
        params: {
          date_range: full5 + 'T18:15:00.000Z,' + full + 'T18:14:59.000Z',
        },
      });

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
    fontFamily: 'Montserrat',
  },
});

export default Home;
