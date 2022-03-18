import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Hello From Countries: {countries.length}</h2>
            {
                countries.map(country => <country></country>)
            }
            {
                countries.map(country => <Country 
                    country={country} /*  country er sob data props e pathaya dilam tahole nicher data gulo alada alada pathano lagtecy na */
                   
                   
              > </Country>)
                    
            }

        </div>
    );
};

export default Countries;