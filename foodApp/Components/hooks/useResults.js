import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';



export default () => {
    const [results, setResults] = useState([]);
    const searchApi = async string => {


        console.log("Run")
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
        searchApi('momo')


    }, [])


    return [searchApi, results]
}