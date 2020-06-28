import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text} from 'react-native-elements';

import QuotesJ from '../Quotes/quotes.json';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const Quotes = () => {
  return (
    <View style={{backgroundColor: '#e7dfd5'}}>
      <Text style={{alignSelf: 'center', marginTop: 10}} h4>
        Quotes At a Glance
      </Text>
      <FlatList
        data={QuotesJ}
        keyExtracter={(x, i) => i}
        renderItem={({item}) => {
          return (
            <View style={{margin: 10}}>
              <Card>
                <Text style={styles.CardC}>{item.quoteText}</Text>
                <Text style={styles.CardA}>- {item.quoteAuthor}</Text>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CardC: {
    margin: 20,
    fontWeight: 'bold',
  },
  CardA: {
    margin: 20,
    alignSelf: 'flex-end',
  },
});

export default Quotes;
