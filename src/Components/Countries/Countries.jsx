import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {

    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
    .then(data => setCountries(data))
    }, []);

    return (
        <div className='section-padding countries-section'>
            <h2 className=''>Country Data: {countries.length}</h2>

<div className="country-box-wrapper">
{
                // countries.map(country =>
                // <Country 
                // name={country.name.common}
                // population ={country.population}
                // area = {country.area}>
                // </Country> )


                // eslint-disable-next-line react/jsx-key
                countries.map(country => <Country country={country}
                key = {country.cca3}>
                </Country>)
            }
</div>
         
        </div>
    );
};

export default Countries;