import React from 'react';
import ReactDOM from 'react-dom/client';
// HashRouter ao invés de BrowserRouter para funcionar no Netlify
import { HashRouter } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Home />
      <Whatsapp />
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
