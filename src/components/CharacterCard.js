
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharacterList from './CharacterList';

const StyledDiv = styled.div`
border: 1px solid black;
`;
export default function CharacterCard ({props}) {
  

  return (
  
  <div><span>todo: location</span>
    <StyledDiv >
    <CharacterList  />
    
    <p>name: {props.character.name}</p>
    <p>status: {props.character.status}</p>
    <p>species:{props.character.species}</p>
    <p></p>
   
    </StyledDiv> 
    </div>
    )
}













