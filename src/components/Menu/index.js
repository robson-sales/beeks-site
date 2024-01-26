import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

import './style.css';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logotipo da beeks" />
        </div>
        <div className={'menu-container'}>
          <ul className="menu-list">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511973667727"
                target="_blank"
                rel="noreferrer"
                aria-label="Link para acessar nosso WhatsApp de contato"
              >
                <button type="submit" className="button-action-menu">
                  <BsWhatsapp color="white" fontSize="12px" /> Fale com o
                  especialista
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-padding"></div>
    </>
  );
}
