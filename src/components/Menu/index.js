import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contato');
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logotipo da beeks" />
          </Link>
        </div>
        <div className={'menu-container'}>
          <ul className="menu-list">
            <li>
              <button
                type="submit"
                onClick={handleContact}
                className="button-action-menu"
              >
                Fale com o especialista
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav-padding"></div>
    </>
  );
}
