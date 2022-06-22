import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from "@emotion/react";
import { global, reset } from "./styles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global styles={reset}/>
    <Global styles={global}/>
    <App />
  </>
);
