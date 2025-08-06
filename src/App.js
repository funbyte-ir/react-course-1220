import logo from './logo.svg';
import './App.css';
import DigikalaList from './components/DigikalaList';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import HomeWithUseEffect from './pages/HomeWithUseEffect';
import FilmsPageWithMui from './pages/FilmsPageWithMui';
import ProductsPage from './pages/ProductsPage';
import NoPage from './pages/NoPage';
import ProductPage from './pages/ProductPage';
import GamePage from './pages/GamePage';
import React from 'react';




export const MyThemeContext = createContext();



function App() {
  const [theme, setTheme] = useState('light');

  return (

    <React.StrictMode>
      <MyThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeWithUseEffect />} />
              <Route path="films" element={<FilmsPageWithMui />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="game" element={<GamePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="product" element={<ProductPage />} />


          </Routes>
        </BrowserRouter>
      </MyThemeContext.Provider>
    </React.StrictMode >
  );
}

export default App;
