import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props);

    // Destructuring the country object
    const {flags, name, capital, population, area} = props.country;
    return (
        <div className="country">
            <img src={flags.png} alt="country flag"></img>
            <h2>Country Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;