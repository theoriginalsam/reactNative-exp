import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';
import DateRangePicker from 'react-native-daterange-picker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  render() {
    const {startDate, endDate, displayedDate} = this.state;
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range>
          <Text>Select The Date Range</Text>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
