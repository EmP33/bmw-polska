import React, { useState } from "react";
import ReactDOM from "react-dom";

// Styles
import { Container } from "./HomePage.styles";
import { PrimaryButton } from "../Components.styles";

// Components
import Appbar from "../components/Appbar/Appbar";
import Swiper from "../components/Swiper/Swiper";
import Pagination from "../components/Swiper/Pagination";

// Icons
import { BmwILogo } from "../assets";
import Menu from "../components/Menu/Menu";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [swipeSlide, setSwipeSlide] = useState(0);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleChangeSlide = (numb: number) => {
    setSwipeSlide(numb);
  };

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <header className="hero">
        <Swiper swipeSlide={swipeSlide} />
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
          <Pagination
            swipeSlide={swipeSlide}
            handleChangeSlide={handleChangeSlide}
          />
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
