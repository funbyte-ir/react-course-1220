import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from './pages/FilmsPage';
import Home from './pages/Home';
import Layout from './pages/Layout';
import ProductsPage from './pages/ProductsPage';
import NoPage from './pages/NoPage';
import ProductPage from './pages/ProductPage';
import FilmsPageWithHooks from './pages/FilmsPageWithHooks';
import HomeWithUseEffect from './pages/HomeWithUseEffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="product" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
