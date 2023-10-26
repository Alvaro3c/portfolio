import React from "react";

const NavBar = ({ onCloseMenu, isMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className={`nav-bar ${isMenuOpen ? 'menu-open' : null}`}>
      <li>
        <a href="#section-abouts" onClick={(event) => {
          event.preventDefault();
          scrollToSection('#section-about');
          onCloseMenu();
        }}>
          About
        </a>
      </li>
      <li>
        <a href="#section-project" onClick={(e) => {
          e.preventDefault();
          scrollToSection('#section-projects');
          onCloseMenu();
        }}>
          Projects
        </a>
      </li>
      <li>
        <a href="#section-contacts" onClick={(e) => {
          e.preventDefault();
          scrollToSection('#section-contact');
          onCloseMenu();
        }}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
