import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {SocketContext} from './Context/Socket'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketContext.Provider>
        <App />
      </SocketContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);