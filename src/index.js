import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001'); //connect the socket to server

//socket to server here only, to not get called in component lifecycle multiple times

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App socket={socket}/>
    </BrowserRouter>
  </React.StrictMode>
);