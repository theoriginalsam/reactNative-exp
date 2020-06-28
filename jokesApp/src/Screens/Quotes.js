import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity, Clipboard} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
} from '@react-native-firebase/admob';

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
    <ScrollView>
      <BannerAd
        unitId="ca-app-pub-8443845632043511/6200111189"
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <View style={{backgroundColor: '#e7dfd5'}}>
        <Text style={{alignSelf: 'center', marginTop: 10}} h4>
          Quotes at a Glance
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
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(item.quoteText);
                    Toast.show('Copied to clipboard');
                  }}>
                  <Icon
                    style={{alignSelf: 'flex-end', marginRight: 10}}
                    name="content-copy"
                    size={30}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CardC: {
    margin: 20,
    fontWeight: 'bold',
  },
  CardA: {
    margin: 10,
    alignSelf: 'flex-end',
  },
});

export default Quotes;
