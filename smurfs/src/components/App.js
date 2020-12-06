import React, { useState, useEffect, } from "react";
import Header from './Header';
import Form from './Form';
import Smurfs from './Smurfs'
import SmurfContext from '../contexts/SmurfContext'
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'
import img from '../img/SmurfShroom.jpg'

const AppDiv = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat:repeat-x;
    /* height: 100%; */
`

const App = () => {
  const [ smurfList, setSmurfList] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfList(res.data))
      .catch(err => console.log(err))
  })
  

  
    return (
    <AppDiv>
        <Header />
        <SmurfContext.Provider value={{smurfList}}>
          <Form />
          <Smurfs />
        </SmurfContext.Provider>
      </AppDiv>
    );
  
}

export default App;
