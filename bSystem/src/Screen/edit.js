import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import BlogProvider from '../Context/Blog';
const Edit = ({navigation}) => {
  const {data, editBlog} = useContext(BlogProvider);

  console.log(data);
  const id = navigation.getParam('id');

  const dataTOedit = data.find(dataTOedit => dataTOedit.id === id);
  const [title, setTitle] = useState(dataTOedit.title);
  const [body, setBody] = useState(dataTOedit.body);

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
      <Button
        title="EDIT"
        onPress={() => {
          editBlog(id, title, body);
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Edit;
