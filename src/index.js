import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import QuemSomos from './components/QuemSomos';
import Home from './components/Home';
import Footer from './components/Footer';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import PageAws from './components/PageAws';
import PageGcp from './components/PageGCP';
import PageGW from './components/PageGoogleWork';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes-nuvem/gcp" element={<PageGcp />} />
        <Route path="/solucoes-nuvem/aws" element={<PageAws />} />
        <Route path="/solucoes-nuvem/google-workplace" element={<PageGW />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
