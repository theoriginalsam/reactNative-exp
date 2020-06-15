import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {Header, Badge} from 'react-native-elements';
import Chart from './chart';
import {ScrollView} from 'react-native-gesture-handler';

const List = ({navigation}) => {
  const result = navigation.getParam('results');
  const id = navigation.getParam('id');
  console.log(id);

  const filtered = result.filter((result) => {
    return result.commodityName == id;
  });

  console.log(filtered);

  return (
    <ScrollView>
      <View>
        <Header
          placement="center"
          leftComponent={{icon: 'rowing', color: '#fff'}}
          centerComponent={{text: id, style: {fontSize: 30, color: 'white'}}}
          rightComponent={{color: '#fff'}}
          containerStyle={{
            backgroundColor: 'grey',
            justifyContent: 'space-around',
          }}
        />
        <View style={styles.badges}>
          <Badge status="primary" value=" Avg " />
          <Badge status="success" value=" Min " />

          <Badge status="warning" value=" Max " />
        </View>

        {filtered[0].retailPrice[0] ? (
          <View style={styles.aboveTiles}>
            <Text style={{marginLeft: 10}} h2>
              {' '}
              Retail
            </Text>
            <View style={styles.tiles}>
              <Text style={styles.textTilesA}>
                {filtered[0].retailPrice[5].avg}
              </Text>
              <Text style={styles.textTilesM}>
                {filtered[0].retailPrice[5].min}
              </Text>
              <Text style={styles.textTilesMx}>
                {filtered[0].retailPrice[5].max}
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <Text style={{marginLeft: 10}} h2>
              {' '}
              Retail
            </Text>
            <View style={styles.tiles}>
              <Text style={styles.textTiles}>Error Fetch</Text>
              <Text style={styles.textTiles}>Error Fetch</Text>
              <Text style={styles.textTiles}>Error Fetch</Text>
            </View>
            <Text style={{textAlign: 'center'}}>
              {' '}
              Database not updated. Sorry for the inconvinience
            </Text>
          </View>
        )}

        {filtered[0].wholesalePrice[0] ? (
          <View>
            <Text h2 style={{marginLeft: 10}}>
              WholeSale
            </Text>
            <View style={styles.tiles}>
              <Text style={styles.textTilesA}>
                {filtered[0].wholesalePrice[5].avg}
              </Text>
              <Text style={styles.textTilesM}>
                {filtered[0].wholesalePrice[5].min}
              </Text>
              <Text style={styles.textTilesMx}>
                {filtered[0].wholesalePrice[5].max}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.aboveTiles}>
            <Text h2> WholeSale</Text>
            <View style={styles.tiles}>
              <Text style={styles.textTiles}>Error Fetch</Text>
              <Text style={styles.textTiles}>Error Fetch</Text>
              <Text style={styles.textTiles}>Error Fetch</Text>
            </View>
            <Text style={{textAlign: 'center'}}>
              Database not updated. Sorry for the inconvinience
            </Text>
          </View>
        )}

        <Chart filtered={filtered} />
        <Image
          source={require('../../assets/2.jpg')}
          style={styles.backgroundImage}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  custom: {
    fontFamily: 'Feather',
    fontSize: 32,
  },

  aboveTiles: {
    marginTop: 40,
  },
  tiles: {
    flexDirection: 'row',
  },
  textTilesA: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    textAlign: 'center',
    padding: 22,
    fontWeight: 'bold',
    color: '#504136',
  },
  textTilesM: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'green',
    textAlign: 'center',
    padding: 22,
    fontWeight: 'bold',
    color: '#504136',
  },
  textTilesMx: {
    margin: 20,
    alignSelf: 'baseline',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'orange',
    textAlign: 'center',
    padding: 22,
    fontWeight: 'bold',
    color: '#504136',
  },
  badges: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    top: 75,
  },
  backgroundImage: {
    resizeMode: 'contain', // or 'stretch'
    position: 'absolute',
    width: 500,
    bottom: 20,
    zIndex: -1000,
  },
});

export default List;
