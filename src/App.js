import React from 'react';
import Lobby from './Components/Lobby'
import { Routes, Route } from 'react-router-dom'


function App(props) {

  return (
    <>
      <Routes>
        <Route path='/' element={<Lobby socket = {props.socket} />}/>
      </Routes>
    </>
  );
}

export default App;
