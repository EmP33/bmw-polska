import React from "react";

// Styles
import { Swiper } from "./Swiper.styles";

// Images
import SlideImg from "../../assets/images/slider1.png";
import MobileSlideImg from "../../assets/images/slider1-mobile.png";

// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
  swipeSlide: number;
}

const SwiperComponent: React.FC<Props> = ({ swipeSlide }) => {
  const matches = useMediaQuery("(min-width: 360px)");
  return (
    <Swiper swipeSlide={swipeSlide}>
      <div className="slide">
        <img src={matches ? SlideImg : MobileSlideImg} alt="New BMW iX slide" />
      </div>
      <div className="slide">
        <img src={matches ? SlideImg : MobileSlideImg} alt="New BMW iX slide" />
      </div>
      <div className="slide">
        <img src={matches ? SlideImg : MobileSlideImg} alt="New BMW iX slide" />
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
