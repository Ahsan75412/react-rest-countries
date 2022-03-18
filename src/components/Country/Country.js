import React from 'react';
import './country.css';

const Country = (props) => {
    const {area,region,population,name} = props.country; //Distracturaing
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <p>Populations: {population}</p>
            <p><small>Region: {region} </small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;