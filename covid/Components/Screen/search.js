import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchB from '../reusableC/SearchB';
const axios = require('axios');




const Search = () => {
    const [string, setString] = useState('');

    axios.create({
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            Authorization:
                'Bearer xv8YZp0XVFGmT2EhUDY2f0y0fgpDO73IcQ9sj3i-Cee9geaLmBb-byl1WyaToQsCNq56E8cUz77kUemrFmdCvRhN8GCflJfuULwV44dTe48KM8CD7MQtqiY9ZCjOXnYx',
        },
    });


    const [results, setResults] = useState([]);
    const searchApi = async string => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'usa',
                    term: string,


                },
            });


            setResults(response.data.businesses);

        } catch (e) { console.log("Error") }


    };
    useEffect(() => {



    }, [])


    return (
        <View>


            <SearchB
                style={styles.fontS}
                string={string}
                onTermChange={newString => setString(newString)}
                onTermSubmit={() => searchApi(string)}
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