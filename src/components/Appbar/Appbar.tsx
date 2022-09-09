import React from "react";
// Styles
import { Container } from "./Appbar.styles";
// Images
import { BmwLogo } from "../../assets";
import { HamburgerButton } from "../../Components.styles";

interface Props {
  toggleMenu: () => void;
}

const Appbar: React.FC<Props> = ({ toggleMenu }) => {
  return (
    <Container>
      <HamburgerButton onClick={toggleMenu} aria-label="menu button">
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <ul>
        <li>
          <a href="#info">Nowe BMW iX</a>
        </li>
        <li>
          <a href="#contact">Umów jazdę próbną</a>
        </li>
      </ul>
      <BmwLogo />
      <p>
        <span>Radość</span> z jazdy
      </p>
    </Container>
  );
};

export default Appbar;
