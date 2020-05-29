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

    console.log(results.Countries[1].Country)


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
        results.filter(function (string) {
            return results.Countries == 'Nepal';
        })

    }








    return (
        <View>


            <SearchB
                style={styles.fontS}
                string={string}
                onTermChange={newString => setString(newString)}
                onTermSubmit={() => { searchApi() }}
            />

            <Text>{results.length}</Text>
            <CountryS title={string} results={searchCountry(title)} />
        </View>
    );
};

const styles = StyleSheet.create({
    fontS: {
        fontSize: 20,

    },
});

export default Search;