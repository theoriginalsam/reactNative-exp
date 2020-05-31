import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import BlogContext from '../Context/Blog'

const indexScreen = () => {
    const value = useContext(BlogContext)

    return <View>
        <Text>Hey</Text>
        <Text>{value}</Text>

    </View>;
};

const styles = StyleSheet.create({});

export default indexScreen;
