/*
import React from "react";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
// src/components/Navbar.js
// src/components/Navbar.js
/*import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="ida.png" alt="Logo" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">Why Us</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Our Process</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Awards</li>
        </ul>
      </div>
      <button className="contact-button">Contact Us</button>
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Navbar;
*/
// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="ida.png" alt="Logo" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#why-us" className="nav-button">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-button">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#our-process" className="nav-button">
              Our Process
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-button">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#awards" className="nav-button">
              Awards
            </a>
          </li>
        </ul>
      </div>
      <button className="contact-button">Contact Us</button>
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Navbar;
