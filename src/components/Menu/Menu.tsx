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
        <button onClick={toggleMenu}>&times;</button>
      </div>
      <ul>
        <li>NOWE BMW iX</li>
        <li>INNOWACYJNA AERODYNAMIKA</li>
        <li>GALERIA</li>
      </ul>
      <PrimaryButton>UMÓW JAZDĘ PRÓBNĄ</PrimaryButton>
    </Container>
  );
};

export default Menu;
