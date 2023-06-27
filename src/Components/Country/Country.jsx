import React from 'react';
import './Country.css'

const Country = (props) => {
    // eslint-disable-next-line react/prop-types
    const {area,region, population,name,flags} = props.country;
    console.log(props);
    return (

           <>
           
           <div className="country-box-inner">
                <img src={flags.png} alt="country-img" />
          <div className="content-inner">
          <h4>Name: {name.common}</h4>
           <h6>Population: {population}</h6>
           <h6>Region: {region}</h6>
           <h6>Area: {area}</h6>
          </div>
            </div>
           
           </>
           
  
   
     
    );
};

export default Country;