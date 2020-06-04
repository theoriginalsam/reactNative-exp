import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import BlogProvider from '../Context/Blog';
const Create = ({navigation}) => {
  const [title, setTitle] = useState('SAM');
  const [body, setBody] = useState('MSA');

  const {addBlog} = useContext(BlogProvider);
  return (
    <View>
      <Text style={styles.header}>Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
        placeholder="Enter the title here"
      />
      <Text style={styles.header}>Description</Text>
      <TextInput
        style={styles.inputD}
        value={body}
        onChangeText={text => {
          setBody(text);
        }}
        placeholder="Enter the Content here"
      />
      <Button
        title="Add"
        onPress={() => {
          addBlog(title, body);
          navigation.navigate('Index');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputD: {
    borderWidth: 1,
    paddingBottom: 100,
    borderColor: 'black',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Create;
