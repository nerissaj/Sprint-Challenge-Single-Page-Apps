

import React, {useState, useEffect} from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList(props) {
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
            {location.map((location, index)=> <LocationCard location={location} key={index}  />)}
              
        
        </div>
        
        );
     
}




























