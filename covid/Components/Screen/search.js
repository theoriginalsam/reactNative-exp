import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchB from '../reusableC/SearchB';
const axios = require('axios');
import CountryS from '../reusableC/CountryS'




const Search = () => {
    const [string, setString] = useState('');

    const getResult = axios.create({
        baseURL: 'https://api.covid19api.com',
    });


    const [results, setResults] = useState([]);


    console.log(results)



    const searchApi = async () => {


        try {
            const response = await getResult.get('/summary');


            setResults(response.data);

        } catch (e) { console.log("R") }


    };
    useEffect(() => {

        searchApi()

    }, [])

    showForCountry = (string) => {

        results = results.filter(results => results.Global)


    }












    return (
        <View>


            <SearchB
                style={styles.fontS}
                string={string}
                onTermChange={newString => setString(newString)}
                onTermSubmit={() => { searchApi() }}
            />

            <Text>{results.NewConfirmed}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    fontS: {
        fontSize: 20,

    },
});

export default Search;