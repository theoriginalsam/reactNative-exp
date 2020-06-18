import React from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import JokesC from '../JSON/joke.json';
import Quotes from '../Quotes/quotes.json';

const Home = () => {
  const number = JokesC.length;
  const numberQ = Quotes.length;

  const randomJ = Math.floor(Math.random() * 2000) + 1;
  const randomQ = Math.floor(Math.random() * 5000) + 1;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeader} h4>
          Welcome to Humor Area
        </Text>
        <Card style={styles.card}>
          <Text style={styles.textTitle}>QUOTE OF THE MOMENT</Text>
          <CardContent text={Quotes[randomQ].quoteText} />
          <Text style={styles.textAuthor}>-{Quotes[randomQ].quoteAuthor}</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.textTitle}>JOKE Of THE MOMENT</Text>
          <CardContent text={JokesC[randomJ].body} />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#e7dfd5',
  },
  textHeader: {
    marginTop: 50,
    textAlign: 'center',
  },
  textTitle: {
    alignSelf: 'center',
    marginVertical: 10,

    textAlign: 'center',
  },
  textAuthor: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    color: '#654062',
    bottom: 10,
  },
});

export default Home;
