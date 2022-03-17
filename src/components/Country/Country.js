import React from 'react';

const Country = (props) => {
    const { area, population, name } = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common} </h1>
            <p>Population: {population}</p>
            <p>Area: {area} </p>
        </div>
    );
};

export default Country;