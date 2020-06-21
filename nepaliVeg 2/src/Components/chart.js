import {LineChart} from 'react-native-chart-kit';
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Chart = ({filtered}) => {
  var arr = [];
  if (filtered[0].retailPrice[0] !== undefined) {
    for (let i = 0; i < 6; i++) {
      arr.push(filtered[0].retailPrice[i].avg);
    }
  } else {
    arr = [0, 0, 0, 0, 0, 0];
  }
  var arrW = [];
  if (filtered[0].wholesalePrice[0] !== undefined) {
    for (let i = 0; i < 6; i++) {
      arrW.push(filtered[0].wholesalePrice[i].avg);
    }
  } else {
    arrW = [0, 0, 0, 0, 0, 0];
  }

  return (
    <View>
      <Text style={styles.marginFC}>Price Chart for RETAIL MARKET</Text>
      <LineChart
        style={styles.marginFC}
        data={{
          labels: ['6 Day', '5 Day', '4 Day', '3 Day', 'Yesteday', 'Today'],
          datasets: [
            {
              data: arr,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={170}
        yAxisLabel="Rs."
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#3b3c00',
          backgroundGradientTo: '#3fa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 20,

          alignSelf: 'center',
        }}
      />
      <Text style={styles.marginFC}>Price Chart for WHOLESALE MARKET</Text>
      <LineChart
        data={{
          labels: ['6 Day', '5 Day', '4 Day', '3 Day', 'Yesteday', 'Today'],
          datasets: [
            {
              data: arrW,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={170}
        yAxisLabel="Rs."
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#3b3c00',
          backgroundGradientTo: '#3fa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 20,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          alignSelf: 'center',

          borderRadius: 20,
          marginBottom: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marginFC: {
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Chart;
