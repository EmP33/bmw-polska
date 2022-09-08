import React, { useState } from "react";
import ReactDOM from "react-dom";

// Styles
import { Container } from "./HomePage.styles";
import { PrimaryButton } from "../Components.styles";

// Components
import Appbar from "../components/Appbar/Appbar";
import Swiper from "../components/Swiper/Swiper";
import Pagination from "../components/Swiper/Pagination";
import ContentSection from "../components/ContentSection/ContentSection";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Greetings from "../components/Greetings/Greetings";

// Icons
import { BmwILogo } from "../assets";

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
  const [showGreetings, setShowGreetings] = useState(false);
  const [swipeSlide, setSwipeSlide] = useState(0);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleGreetings = () => {
    setShowGreetings((prev) => !prev);
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
            <h2>PIONIER NOWEJ ERY.</h2>
          </div>
          <Pagination
            swipeSlide={swipeSlide}
            handleChangeSlide={handleChangeSlide}
          />
          <PrimaryButton data-aos="fade-up" data-aos-delay="600">
            <a href="#contact">Umów jazdę próbną</a>
          </PrimaryButton>
        </div>
      </header>
      <ContentSection type="blocks" />
      <ContentSection type="text" />
      <Gallery />
      <Contact handleGreetings={handleGreetings} />
      <Footer />
      {ReactDOM.createPortal(
        <Menu showMenu={showMenu} toggleMenu={handleToggleMenu} />,
        document.querySelector("#backdrop-root")!
      )}
      {showGreetings &&
        ReactDOM.createPortal(
          <Greetings handleGreetings={handleGreetings} />,
          document.querySelector("#backdrop-root")!
        )}
    </Container>
  );
};

export default HomePage;
