import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import BlogContext from '../Context/Blog'

const indexScreen = () => {
    const { data, addBlog } = useContext(BlogContext)

    return <View>
        <Text>Hey</Text>
        <Button title="Press" onPress={addBlog} />
        <FlatList
            data={data}
            keyExtractor={blogPosts => blogPosts.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }} />
    </View>;
};

const styles = StyleSheet.create({});

export default indexScreen;
