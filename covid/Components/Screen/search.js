import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import SearchB from '../reusableC/SearchB';
import {connect} from 'react-redux';

import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import {addTask} from '../taskReducer';

const HomeScreen = props => {
  const [task, setTask] = useState('');

  return (
    <View>
      <SearchB task={task} onTermChange={newTask => setTask(newTask)} />
      <Button
        title="Add"
        onPress={() => {
          addTask({task});
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TaskList');
        }}>
        <Text>See the list</Text>
      </TouchableOpacity>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    task: state.payload,
  };
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(HomeScreen);
