import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
border: 1px solid black;
`;

export default function LocationCard ({props}) {
  // image={image}
  return (<div> <span>todo: location</span>
    <StyledDiv>

    image = {props.location.image}
    <p>name: {props.location.name}</p>
    <p>type: {props.location.type}</p>
    <p>dimension: {props.location.dimension}</p>
    <p>residents:{props.location.resident}</p>
    </StyledDiv> 
    </div>
  )
  
}






