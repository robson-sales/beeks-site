import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import QuemSomos from './components/QuemSomos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes-nuvem" element={<div>Soluções Nuvem</div>} />
        <Route path="/produtos" element={<div>Produtos</div>} />
        <Route path="/contato" element={<div>Contato</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
