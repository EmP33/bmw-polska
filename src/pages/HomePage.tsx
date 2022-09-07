import React from "react";
// Styles
import { Container } from "./HomePage.styles";
import { PrimaryButton } from "../Components.styles";
// Components
import Appbar from "../components/Appbar/Appbar";
// Icons
import { BmwILogo } from "../assets";

const HomePage = () => {
  return (
    <Container>
      <section className="hero">
        <div className="hero__wrapper">
          <Appbar />
          <div className="hero__wrapper_info">
            <BmwILogo />
            <h1>
              <span>NOWE</span> BMW iX
            </h1>
            <h3>PIONIER NOWEJ ERY.</h3>
          </div>
          <PrimaryButton>Umów jazdę próbną</PrimaryButton>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
