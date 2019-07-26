import React, {useState, useEffect} from "react";
import axios from 'axios';
import LocationCard from './LocationCard';



function Episode() {

const [shows, setShows] = useState([]);

useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
        setShows(res.data.results)
    })
    .catch(err => console.log(err));

},[])

console.log(shows)

if (!shows){
    return <h1>Loading......</h1>
}else {

    return(<div> <span>todo: location</span>
        <h1>
            {shows.map((show, index) => <LocationCard show={show}  key={index}  />)}
              
        
        </h1>
        </div>
        );
     
}


}

export default Episode;
