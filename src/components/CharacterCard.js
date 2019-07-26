
import React from 'react';

import styled from 'styled-components'
import CharacterList from './CharacterList';


const StyledDiv = styled.div`
border: 1px solid black;
`;
export default function CharacterCard(props) {
  console.log('props',props)


  return (
  
  <div><span>todo: location</span>
    <StyledDiv>
    <CharacterList />
    
    <p> {props.chars.name}</p>
    <p> {props.chars.status}</p>
    <p>{props.chars.species}</p>
    <p></p>
   
    </StyledDiv> 
    </div>
    )
}













