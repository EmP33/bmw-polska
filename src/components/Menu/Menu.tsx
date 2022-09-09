import React from "react";
// Styles
import { Container } from "./Menu.styles";
import { PrimaryButton } from "../../Components.styles";
import { BmwLogo } from "../../assets";

interface Props {
  toggleMenu: () => void;
  showMenu: boolean;
}

const Menu: React.FC<Props> = ({ toggleMenu, showMenu }) => {
  return (
    <Container showMenu={showMenu}>
      <div className="menu-action">
        <div></div>
        <BmwLogo />
        <button type="button" onClick={toggleMenu}>
          &times;
        </button>
      </div>
      <ul>
        <li>
          <a onClick={toggleMenu} href="#info">
            NOWE BMW iX
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#info2">
            INNOWACYJNA AERODYNAMIKA
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#gallery">
            GALERIA
          </a>
        </li>
      </ul>
      <PrimaryButton onClick={toggleMenu}>
        <a href="#contact">UMÓW JAZDĘ PRÓBNĄ</a>
      </PrimaryButton>
    </Container>
  );
};

export default Menu;
