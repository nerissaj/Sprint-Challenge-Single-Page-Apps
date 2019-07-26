import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
const [location, setLocation] = useState([])



useEffect(()=>{
    axios
    .get(`https://rickandmortyapi.com/api/location/`)
    .then(res => {
        setLocation(res.data.results)
    })
    .catch(err => console.log(err));

},[])




    return(
        <div>
            {location.map((place, index) => <LocationCard place={place} key={index}  />)}
              
        
        </div>
        
        );
     
}


