import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import SearchB from '../reusableC/SearchB';
import {connect} from 'react-redux';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {addTask} from '../taskReducer';

const HomeScreen = props => {
  const [task, setTask] = useState('');
  console.log(props.names);

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
        <Text>See the list </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => {
  return {names: state};
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(HomeScreen);
