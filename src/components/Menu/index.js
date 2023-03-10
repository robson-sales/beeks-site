import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';
import { menuItems } from './menuItems';
import logo from '../../assets/images/logo.png';
import hamburguer from '../../assets/images/hamburguer.svg';
import close from '../../assets/images/close.svg';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Logotipo */}
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          {/* Ícone do menu hamburger */}
          <div className="menu-icon" onClick={handleShowNavbar}>
            <NavLink>
              <img src={showNavbar ? close : hamburguer} alt="Logo" />
            </NavLink>
          </div>
          {/* Elementos do menu */}
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              {menuItems.map((currElement, index) => (
                <li className="nav-element-root" key={index}>
                  <NavLink
                    to={currElement.url}
                    onClick={handleShowNavbar}
                    key={index}
                  >
                    {currElement.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar falsa para dar padding no menu */}
      <div className="nav-padding"></div>
    </>
  );
}
