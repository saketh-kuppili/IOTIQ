import React, { useState } from 'react';
import logo from '../assets/Cream Logo.svg';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="l-header">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-12">
            <nav className="nav bd-grid">
              <div className="col-3 nav__logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="col-6 nav__menu">
                <ul className="nav__list">
                  <li className="nav__item"><a href="#Home" className="nav__link active">Home</a></li>
                  <li className="nav__item"><a href="#Discover" className="nav__link">Discover</a></li>
                  <li className="nav__item"><a href="#Solution" className="nav__link">Solution</a></li>
                  <li className="nav__item"><a href="#Product" className="nav__link">Product</a></li>
                </ul>
              </div>
              <div className="nav__toggle col-12 d-block d-md-none" onClick={toggleMenu}>
                <i className='bx bx-menu'></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
