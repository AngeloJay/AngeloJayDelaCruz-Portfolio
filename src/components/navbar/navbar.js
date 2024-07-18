import React from 'react';
import './navbar.css';

const Navbar = () => {
  function sidebarShow(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="hideOnMobile">
          <a href="#welcome" className="nav-link">Welcome</a>
        </li>
        <li className="hideOnMobile">
          <a href="#about-me" className="nav-link">About Me</a>
        </li>
        <li className="hideOnMobile">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li className="hideOnMobile">
          <a href="#skills" className="nav-link">Skills</a>
        </li>
        <li className="hideOnMobile">
          <a href="#hobbies" className="nav-link">Hobbies/Interests</a>
        </li>
        <li className="hideOnMobile">
          <a href="#contact-me" className="nav-link">Contact Me</a>
        </li>
        <li className="hideOnDesktop" onClick={sidebarShow}>
          <a href="#"><box-icon name="menu" size="lg"></box-icon></a>
        </li>
      </ul>

      {/* Sidebar */}
      <ul className="sidebar">
        <li className="nav-item" onClick={sidebarShow}>
          <a href="#" className="nav-link"><box-icon name='right-arrow-alt' size='md'></box-icon></a>
        </li>
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
          <a href="#hobbies" className="nav-link">Hobbies/Interests</a>
        </li>
        <li className="nav-item">
          <a href="#contact-me" className="nav-link">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
