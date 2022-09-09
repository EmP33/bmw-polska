import React, { useState } from "react";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Styles
import { Container, FullscreenImage, Backdrop } from "./Gallery.styles";
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

interface IshowImage {
  show: boolean;
  img: string | null;
}

const Gallery = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  const [showImage, setShowImage] = useState<IshowImage>({
    show: false,
    img: null,
  });

  const handleToggleShowImage = (img: string | null) => {
    setShowImage((prev) => ({
      show: !prev.show,
      img: img,
    }));
  };

  return (
    <>
      <Container id="gallery">
        <img
          onClick={() => handleToggleShowImage(insideFront4k)}
          data-aos="zoom-in"
          src={matches ? insideFront : insideFront4k}
          alt="BMW iX inside front"
        />
        <img
          onClick={() => {
            handleToggleShowImage(foto34k);
          }}
          data-aos="zoom-in"
          src={matches ? foto3 : foto34k}
          alt="BMW iX back"
        />
        <img
          onClick={() => {
            handleToggleShowImage(insideBack4k);
          }}
          data-aos="zoom-in"
          src={matches ? insideBack : insideBack4k}
          alt="BMW iX inside back"
        />
        <img
          onClick={() => {
            handleToggleShowImage(sliderPhoto);
          }}
          data-aos="zoom-in"
          src={sliderPhoto}
          alt="BMW iX front"
        />
        <img
          onClick={() => {
            handleToggleShowImage(foto24k);
          }}
          data-aos="zoom-in"
          src={matches ? foto2 : foto24k}
          alt="BMW iX back"
        />
      </Container>
      {showImage.show && (
        <>
          <Backdrop
            onClick={() => {
              handleToggleShowImage(null);
            }}
          />
          <FullscreenImage
            onClick={() => {
              handleToggleShowImage(null);
            }}
            src={showImage.img!}
            alt="Full screen bmw photo"
          />
        </>
      )}
    </>
  );
};

export default Gallery;
