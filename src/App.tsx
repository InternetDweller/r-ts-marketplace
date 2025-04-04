import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import Home from './pages/Home';
import Product from './pages/Product';
import Search from './pages/Search';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/product/:productid' element={<Product />} />
        <Route path='/search/' element={<Search />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  );
};
