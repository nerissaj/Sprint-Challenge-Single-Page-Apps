import React from 'react';

import styled from 'styled-components';
import LocationsList from './LocationsList';


const StyledDiv = styled.div`
border: 1px solid black;
`;

const StyledImg = styled.img`
width:80px;
border:5px solid green;
`;



export default function LocationCard (props) {
  // image={image}
  return (
  <div><span>todo: location</span>
    <StyledDiv>
      <LocationsList />

     <StyledImg src = {props.location.image} />
    <p> name:{props.location.name}</p>
    <p> location: {props.location.type}</p>
    <p> {props.location.dimension}</p>
    <p>{props.location.resident}</p>
    </StyledDiv> 
    </div>
  )
  
}


