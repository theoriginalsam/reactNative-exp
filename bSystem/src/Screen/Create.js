import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import BlogProvider from '../Context/Blog';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const {addBlog} = useContext(BlogProvider);
  return (
    <View>
      <Text style={styles.header}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
        placeholder="Enter the title here"
      />
      <Text style={styles.header}>Body</Text>
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={text => {
          setBody(text);
        }}
        placeholder="Enter the Content here"
      />
      <Button title="Add" onPress={() => addBlog(title, body)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Create;
