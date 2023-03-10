import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';
import { menuItems } from './menuItems';
import logo from '../../assets/images/logo.png';
import hamburguer from '../../assets/images/hamburguer.svg';
import close from '../../assets/images/close.svg';
import Dropdown from './Dropdown';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <NavLink>
            <img src={showNavbar ? close : hamburguer} alt="Logo" />
          </NavLink>
        </div>
        <div className={`menu-container  ${showNavbar && 'active'}`}>
          <ul className="menu-list">
            {menuItems.map((menuItem, index) => (
              <li className="menu-item" key={index}>
                <NavLink
                  to={menuItem.url}
                  onClick={handleShowNavbar}
                  key={index}
                  className="menu-item-link"
                >
                  {menuItem.title}
                </NavLink>
                {'subItems' in menuItem && <Dropdown menuItem={menuItem} />}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="nav-padding"></div>
    </>
  );
}
