import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity, Clipboard} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';

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
    <ScrollView>
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
                    Toast.show('Copied');
                  }}>
                  <Icon
                    style={{alignSelf: 'flex-end'}}
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
