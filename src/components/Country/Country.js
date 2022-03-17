import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, population, flags } = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common} </h1>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Ariea: {area} </p>
        </div>

    );
};

export default Country;