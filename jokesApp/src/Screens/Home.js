import React, {useEffect} from 'react';
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
import admob, {
  MaxAdContentRating,
  TestIds,
  BannerAd,
  BannerAdSize,
} from '@react-native-firebase/admob';

const Home = () => {
  const number = JokesC.length;
  const numberQ = Quotes.length;

  const randomJ = Math.floor(Math.random() * 2000) + 1;
  const randomQ = Math.floor(Math.random() * 5000) + 1;

  useEffect(() => {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeader}>Welcome to the Humour Area</Text>
        <Card style={styles.card}>
          <Text style={styles.textTitle}>QUOTE OF THE MOMENT</Text>
          <CardContent text={Quotes[randomQ].quoteText} />
          <Text style={styles.textAuthor}>-{Quotes[randomQ].quoteAuthor}</Text>
        </Card>
        <BannerAd
          unitId="ca-app-pub-8443845632043511/6200111189"
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        <Card style={styles.card}>
          <Text style={styles.textTitle}>JOKE OF THE MOMENT</Text>
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
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#e7dfd5',
  },
  textHeader: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
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
