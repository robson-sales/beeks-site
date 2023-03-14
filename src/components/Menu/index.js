import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { menuItems } from './menuItems';
import logo from '../../assets/images/logo.png';
import hamburguer from '../../assets/images/hamburguer.svg';
import close from '../../assets/images/close.svg';
import Dropdown from './Dropdown';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNavbar: false };
    this.handleShowNavbar = this.handleShowNavbar.bind(this);
  }

  handleShowNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar,
    });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={this.handleShowNavbar}>
            <Link>
              <img
                src={this.state.showNavbar ? close : hamburguer}
                alt="Logo"
              />
            </Link>
          </div>
          <div
            className={`menu-container  ${this.state.showNavbar && 'active'}`}
          >
            <ul className="menu-list">
              {menuItems.map((menuItem, index) => (
                <li className="menu-item" key={index}>
                  {'subItems' in menuItem ? (
                    <p key={index} className="menu-item-link">
                      {menuItem.title}
                    </p>
                  ) : (
                    <Link
                      to={menuItem.url}
                      key={index}
                      className="menu-item-link"
                      onClick={this.handleShowNavbar}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                  {'subItems' in menuItem && (
                    <Dropdown
                      menuItem={menuItem.subItems}
                      showNavbar={this.handleShowNavbar}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="nav-padding"></div>
      </>
    );
  }
}
