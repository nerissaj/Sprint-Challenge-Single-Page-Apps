import React from 'react';

import styled from 'styled-components';
import LocationList from './LocationsList';


const StyledDiv = styled.div`
border: 1px solid black;
`;

export default function LocationCard ({props}) {
  // image={image}
  return (<div> <span>todo: location</span>
    <StyledDiv>

     image = {props.location.image}
    <p> {props.location.name}</p>
    <p> {props.location.type}</p>
    <p> {props.location.dimension}</p>
    <p>{props.location.resident}</p>
    </StyledDiv> 
    </div>
  )
  
}


