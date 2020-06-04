import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import BlogProvider from '../Context/Blog';
const Create = ({navigation}) => {
  const [title, setTitle] = useState('SAM');
  const [body, setBody] = useState(
    'CLI is a command line program that accepts text input to execute operating system functions. ... In the 1970s an 1980s, command line input was commonly used by Unix systems and PC systems like MS-DOS and Apple DOS. Today, with graphical user interfaces (GUI), most users never use command-line interfaces (CLI).',
  );

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
