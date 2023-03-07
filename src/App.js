import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation';
import HomePage from './pages/HomePage';
import Products from './pages/ProductsPage';
import Authentication from './pages/Authentication';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<HomePage />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='auth' element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
