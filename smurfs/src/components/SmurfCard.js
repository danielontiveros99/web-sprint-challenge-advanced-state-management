import React from "react";
import styled from 'styled-components'

const SmurfCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    height:18rem;
    border: 10px solid #52b788;
    border-radius: 500px;
    background-color: #95d5b2;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0px 80px 80px 2px black;
`

const SmurfCard = (props) => {
    return (
        <SmurfCardDiv>
            <h1>{props.smurf.name} Smurf</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfCardDiv>
    );
  
}

export default SmurfCard;