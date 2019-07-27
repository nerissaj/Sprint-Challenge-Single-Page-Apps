import React, {useState, useEffect} from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';



function EpisodeList() {

const [show, setShow] = useState([]);

useEffect(() => {

    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
        setShow(res.data.results)
        console.log('res',res)
    })
    .catch(err => console.log(err));

},[])

console.log(show)

if (!show){
    return <h1>Loading......</h1>
}else {

    return(<div> <span>todo: location</span>
        <h1>
            {show.map((show, index) => (<EpisodeCard show = {show} key={index} />))}
              
        
        </h1>
        </div>
        );
     
}


}

export default EpisodeList;
