import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { GlobalStyles } from 'src/styles/setup';
import { routes } from 'src/routes';
import { Navigation } from './Navigation/Navigation';

function App() {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Navigation />
         <Routes />
      </BrowserRouter>
   );
}

export default hot(App);
