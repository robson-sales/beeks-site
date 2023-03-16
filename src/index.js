import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import QuemSomos from './components/QuemSomos';
import Home from './components/Home';
import Footer from './components/Footer';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import SolutionAws from './components/SolutionAws';
import SolutionGcp from './components/SolutionGCP';
import SolutionGW from './components/SolutionGoogleWork';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes-nuvem/gcp" element={<SolutionGcp />} />
        <Route path="/solucoes-nuvem/aws" element={<SolutionAws />} />
        <Route
          path="/solucoes-nuvem/google-workplace"
          element={<SolutionGW />}
        />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
