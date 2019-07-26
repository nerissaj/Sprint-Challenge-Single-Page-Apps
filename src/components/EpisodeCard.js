import React from 'react';
import styled from 'styled-components'
import EpisodeList from './CharacterList';

const StyledDiv = styled.div`
border: 1px solid black;
`;
export default function EpisodeCard(props) {
  //console.log('props',props)


  return (
  
    <StyledDiv><span>todo: location</span>
   
    <EpisodeList  />
    
    <p> {props.show.name}</p>
    <p> {props.show.status}</p>
    <p>{props.show.species}</p>
    
    
    </StyledDiv> 
   
    )
}