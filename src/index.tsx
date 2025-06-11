import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

