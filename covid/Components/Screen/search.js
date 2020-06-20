import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import SearchB from '../reusableC/SearchB';
import {connect} from 'react-redux';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {addTask, test} from '../taskReducer';
import action from '../actions';

const HomeScreen = props => {
  const [task, setTask] = useState('');
  console.log(props.names);

  return (
    <View>
      <SearchB task={task} onTermChange={newTask => setTask(newTask)} />
      <Button title="Add" onPress={props.createTask()} />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TaskList');
        }}>
        <Text>See list </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => {
  return {names: state};
};

const styles = StyleSheet.create({});

export default connect(
  mapStateToProps,
  action,
)(HomeScreen);
