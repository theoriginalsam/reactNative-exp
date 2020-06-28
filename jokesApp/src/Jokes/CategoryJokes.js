import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-material-ui';
import admob, {
  MaxAdContentRating,
  InterstitialAd,
  RewardedAd,
  TestIds,
  BannerAd,
  BannerAdSize,
} from '@react-native-firebase/admob';

const CategoryJokes = ({navigation}) => {
  const id = navigation.getParam('item');
  const result = navigation.getParam('results');
  console.log(result[1].category);

  const filtered = result.filter((result) => {
    return result.category == id;
  });
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
      <View>
        <BannerAd
          unitId="ca-app-pub-8443845632043511/6200111189"
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: 'grey',
                  padding: 10,
                }}>
                <Card>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      padding: 10,
                      margin: 10,
                    }}>
                    {item.body}
                  </Text>
                </Card>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CategoryJokes;
