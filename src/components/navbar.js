import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a href="#welcome" className="nav-link">Welcome</a>
        </li>

        <li className="nav-item">
          <a href="#about-me" className="nav-link">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>

        <li className="nav-item">
          <a href="#skills" className="nav-link">Skills</a>
        </li>

        <li className="nav-item">
          <a href="#hobbies" className="nav-link">Hobbies</a>
        </li>

        <li className="nav-item">
          <a href="#contact-me" className="nav-link">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
