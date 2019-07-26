import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacter(response.data.results);
    });
    
  }, [])

  return (<section className='character-list grid-view'>

      <h2>TODO: {character.map((chars, index) => <CharacterCard chars={chars}  key={index}  />)} </h2>
    </section>
            

  )
}

  
 
    
//<div className="save-button" onClick={character.id}>Save</div>
   
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  