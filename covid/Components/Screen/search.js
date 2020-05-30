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




        } catch (e) { console.log("Error") }


    };




    useEffect(() => {

        searchApi()

    }, [])



    const searchApiC = (text) => {

        console.log("Running")
        console.log(results)

        results = results.filter(function (item) {
            return item.Countries.Country == text;
        })




    }



















    return (
        <View>


            <SearchB
                style={styles.fontS}
                string={string}
                onTermChange={newString => setString(newString)}
                onTermSubmit={() => { searchApiC(string) }}
            />

            <Text>{string}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    fontS: {
        fontSize: 20,

    },
});

export default Search;