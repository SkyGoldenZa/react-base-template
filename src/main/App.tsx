import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'src/styles/setup';
import { Routes } from './Routes';
import { Navigation } from './Navigation/Navigation';

const App = () => (
   <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <Routes />
   </BrowserRouter>
);

export default hot(App);
