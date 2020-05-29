import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchB from '../reusableC/SearchB';
const axios = require('axios');




const Search = () => {
    const [string, setString] = useState('');

    const getResult = axios.create({
        baseURL: 'https://api.covid19api.com',
    });


    const [results, setResults] = useState([]);

    console.log(results)

    console.log(results)
    const searchApi = async () => {


        try {
            const response = await getResult.get('/summary');


            setResults(response.data);

        } catch (e) { console.log("Error") }


    };
    useEffect(() => {

        searchApi()

    }, [])

    const searchCountry = (string) => {

        return results.filter(results => {
            return results.Countries.Country === string
        })


    }





    return (
        <View>


            <SearchB
                style={styles.fontS}
                string={string}
                onTermChange={newString => setString(newString)}
                onTermSubmit={() => searchCountry()}
            />
            <Text>{results.length}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    fontS: {
        fontSize: 20,

    },
});

export default Search;