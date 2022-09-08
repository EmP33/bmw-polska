import React from "react";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Styles
import { Container } from "./Gallery.styles";
// Images
import insideFront4k from "../../assets/images/inside-front@2x.png";
import insideBack4k from "../../assets/images/inside-back@2x.png";
import foto34k from "../../assets/images/foto3_1@2x.png";
import sliderPhoto from "../../assets/images/slider1.png";
import foto24k from "../../assets/images/foto2_2@2x.png";
import insideFront from "../../assets/images/inside-front.png";
import insideBack from "../../assets/images/inside-back.png";
import foto3 from "../../assets/images/foto3_1.png";
import foto2 from "../../assets/images/foto2_2.png";

const Gallery = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <Container>
      <img
        src={matches ? insideFront : insideFront4k}
        alt="BMW iX inside front"
      />
      <img src={matches ? foto3 : foto34k} alt="BMW iX back" />
      <img src={matches ? insideBack : insideBack4k} alt="BMW iX inside back" />
      <img src={matches ? sliderPhoto : sliderPhoto} alt="BMW iX front" />
      <img src={matches ? foto2 : foto24k} alt="BMW iX back" />
    </Container>
  );
};

export default Gallery;
