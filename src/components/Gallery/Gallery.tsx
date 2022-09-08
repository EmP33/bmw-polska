import React from "react";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Styles
import { Container } from "./Gallery.styles";
// Images
import insideFront4k from "../../assets/images/inside-front@2x.webp";
import insideBack4k from "../../assets/images/inside-back@2x.webp";
import foto34k from "../../assets/images/foto3_1@2x.webp";
import sliderPhoto from "../../assets/images/slider1.webp";
import foto24k from "../../assets/images/foto2_2@2x.webp";
import insideFront from "../../assets/images/inside-front.webp";
import insideBack from "../../assets/images/inside-back.webp";
import foto3 from "../../assets/images/foto3_1.webp";
import foto2 from "../../assets/images/foto2_2.webp";

const Gallery = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <Container>
      <img
        data-aos="zoom-in"
        data-aos-offset="700"
        src={matches ? insideFront : insideFront4k}
        alt="BMW iX inside front"
      />
      <img
        data-aos="zoom-in"
        data-aos-offset="1000"
        src={matches ? foto3 : foto34k}
        alt="BMW iX back"
      />
      <img
        data-aos="zoom-in"
        data-aos-offset="1000"
        src={matches ? insideBack : insideBack4k}
        alt="BMW iX inside back"
      />
      <img
        data-aos="zoom-in"
        data-aos-offset="1000"
        src={sliderPhoto}
        alt="BMW iX front"
      />
      <img
        data-aos="zoom-in"
        data-aos-offset="1000"
        src={matches ? foto2 : foto24k}
        alt="BMW iX back"
      />
    </Container>
  );
};

export default Gallery;
