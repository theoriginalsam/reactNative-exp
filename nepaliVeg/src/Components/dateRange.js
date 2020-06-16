import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import Dates from 'react-native-dates';
import moment from 'moment';

export default class DateS extends Component {
  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null,
  };

  render(props) {
    const isDateBlocked = (date) => date.isBefore(moment(), 'day');

    const onDatesChange = ({startDate, endDate, focusedInput}) =>
      this.setState({...this.state, focus: focusedInput}, () =>
        this.setState({...this.state, startDate, endDate}),
      );

    const onDateChange = ({date}) => this.setState({...this.state, date});

    return (
      <ScrollView>
        <View style={styles.container}>
          <Dates
            onDatesChange={onDatesChange}
            isDateBlocked={isDateBlocked}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            focusedInput={this.state.focus}
            focusedMonth={moment('05/09/2030', 'DD/MM/YYYY')}
            range
          />

          {this.state.date && (
            <Text style={styles.date}>
              {this.state.date && this.state.date.format('LL')}
            </Text>
          )}
          <Text
            style={[
              styles.date,
              this.state.focus === 'startDate' && styles.focused,
            ]}>
            {this.state.startDate && this.state.startDate.format('LL')}
          </Text>
          <Text
            style={[
              styles.date,
              this.state.focus === 'endDate' && styles.focused,
            ]}>
            {this.state.endDate && this.state.endDate.format('LL')}
          </Text>

          <Button
            title="GO BACK"
            onPress={(props) => {
              props.navigation.navigate('Home');
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  date: {
    marginTop: 50,
  },
  focused: {
    color: 'blue',
  },
});

AppRegistry.registerComponent(
  'ReactNativeDatesDemo',
  () => ReactNativeDatesDemo,
);
