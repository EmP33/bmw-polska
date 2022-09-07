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
      <HamburgerButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <ul>
        <li>Nowe BMW iX</li>
        <li>Umów jazdę próbną</li>
      </ul>
      <BmwLogo />
      <p>
        <span>Radość</span> z jazdy
      </p>
    </Container>
  );
};

export default Appbar;
