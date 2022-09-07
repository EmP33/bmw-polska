import React, { useState } from "react";
import ReactDOM from "react-dom";
// Styles
import { Container } from "./HomePage.styles";
import { PrimaryButton } from "../Components.styles";
// Components
import Appbar from "../components/Appbar/Appbar";
// Icons
import { BmwILogo } from "../assets";
import Menu from "../components/Menu/Menu";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <Container>
      <header className="hero">
        <div className="hero__wrapper">
          <Appbar toggleMenu={handleToggleMenu} />
          <div className="hero__wrapper_info">
            <div>
              <BmwILogo />
            </div>
            <h1>
              <span>NOWE</span> BMW iX
            </h1>
            <h3>PIONIER NOWEJ ERY.</h3>
          </div>
          <PrimaryButton>Umów jazdę próbną</PrimaryButton>
        </div>
      </header>
      {ReactDOM.createPortal(
        <Menu showMenu={showMenu} toggleMenu={handleToggleMenu} />,
        document.querySelector("#backdrop-root")!
      )}
    </Container>
  );
};

export default HomePage;
