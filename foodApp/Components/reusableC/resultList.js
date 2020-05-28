import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from './ResultDetails'

const resultList = ({ title, results, navigation }) => {
    return <View style={styles.viewS} >

        <Text style={styles.textS}>{title}</Text>



        <FlatList


            horizontal
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({ item }) => {
                return <ResultDetails results={item} navigation={navigation} />

            }}

        />



    </View>;
};

const styles = StyleSheet.create({

    textS: {
        fontSize: 20,
        color: "black",
        fontFamily: 'Iowan Old Style',
        fontWeight: "bold",
        marginHorizontal: 10,
        marginBottom: 10
    },

    viewS: {
        marginVertical: 10
    }



});

export default resultList;
