import React from 'react';
import Lobby from './Components/Lobby'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Lobby/>}/>
      </Routes>
    </>
  );
}

export default App;
