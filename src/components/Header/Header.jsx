import React, { useState } from "react";
import NavBar from './NavBar/NavBar';
import { IonIcon } from '@ionic/react';
import { listOutline } from 'ionicons/icons';



const Header = ({ }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }
  return <>
    <header>
      <section className="header-elements">
        <a href="#heading-section" onClick={(e) => {
          e.preventDefault;
          scrollToSection('#section-heading')
        }}>
          Alvaro
        </a>
        <div className="button-container">
          {<IonIcon icon={listOutline} className="icon list-icon" onClick={toggleMenu} />}
        </div>
      </section>

    </header>

    {isMenuOpen && <NavBar isMenuOpen={isMenuOpen} onCloseMenu={handleMenuItemClick} />}

  </>;
};

export default Header;
