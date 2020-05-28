import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import resultList from "./resultList";

const ResultDetails = ({ results, navigation }) => {
    const name = results.name

    return <View style={styles.margin}>


        <Image style={styles.ImageS} source={{ uri: results.image_url }} />

        <TouchableOpacity onPress={() => {
            navigation.navigate('Tab', { id: results.id })

        }}>
            {name.length >= 16 &&
                <Text style={styles.name2}>{results.name}</Text>
            }
            {name.length <= 16 &&
                <Text style={styles.name}>{results.name}</Text>
            }

        </TouchableOpacity>



        <Text style={styles.rates}>{results.rating} Stars , {results.review_count} Reviews</Text>
    </View>;
};

const styles = StyleSheet.create({

    ImageS: {
        height: 120,
        width: 200,
        borderRadius: 10
    },
    name: {
        fontSize: 20,

        fontWeight: 'bold',


    },
    name2: {
        fontSize: 14,

        fontWeight: 'bold',


    },
    rates: {
        fontSize: 10,
        color: 'grey'


    },
    margin: {
        marginHorizontal: 10
    }

});

export default ResultDetails;
