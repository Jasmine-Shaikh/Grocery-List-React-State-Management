import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Grocery} from "./Grocery.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grocery />
  </React.StrictMode>
);
