import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import BlogContext from '../Context/Blog'

const indexScreen = () => {
    const blogPosts = useContext(BlogContext)

    return <View>
        <Text>Hey</Text>
        <FlatList
            data={blogPosts}
            keyExtractor={blogPosts => blogPosts.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }} />
    </View>;
};

const styles = StyleSheet.create({});

export default indexScreen;
