import React from 'react';

const Country = (props) => {
    const { name, area, population } = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common} </h1>
            <p>Population: {population} </p>
            <p>Ariea: {area} </p>
        </div>

    );
};

export default Country;