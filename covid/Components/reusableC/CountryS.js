import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CountryS = (title, results, countryR) => {
    if (!countryR.length) {
        return null
    }

    return <View>
        <Text>{results.Global.NewConfirmed}</Text>

    </View>;
};

const styles = StyleSheet.create({});

export default CountryS;
