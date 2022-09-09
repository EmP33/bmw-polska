import React from "react";

// Icons
import { Car } from "../../assets";
import { ElectricStation } from "../../assets";

// Images
import foto1 from "../../assets/images/foto1_1.webp";
import foto2 from "../../assets/images/foto1_2.webp";
import foto3 from "../../assets/images/foto2_1.webp";
import foto4 from "../../assets/images/foto2_2.webp";

// Styles
import { ContentSection } from "./ContentSection.styles";

interface Props {
  type: "blocks" | "text";
}

const ContentSectionComponent: React.FC<Props> = ({ type }) => {
  return (
    <ContentSection type={type} id="info">
      {type === "blocks" ? (
        <div className="content" data-aos="fade-up">
          <ElectricStation />
          <h2>FAKTY O NOWYM BMW iX.</h2>
          <div className="content__blocks">
            <div className="block">
              <h3>01</h3>
              <p>Ponad 600 km zasięgu *</p>
            </div>
            <div className="block">
              <h3>02</h3>
              <p>
                Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi
                <br />
                elektrycznie i ponad 500 KM
                <br /> (370 kW) *
              </p>
            </div>
            <div className="block">
              <h3>03</h3>
              <p>
                Od 0 do 100 km / h <br /> w mniej niż 5 sekund *
              </p>
            </div>
            <div className="block">
              <h3>04</h3>
              <p>
                Ładowanie 120 km <br /> w 10 minut *
              </p>
            </div>
            <div className="block">
              <h3>05</h3>
              <p>
                Publiczne szybkie ładowanie od 10 do 80% w mniej niż <br /> 40
                minut
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="content" data-aos="fade-up">
          <Car />
          <h2>INNOWACYJNA AERODYNAMIKA BMW iX.</h2>
          <h3>
            BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża
            zasadę „forma podąża za funkcją”.
          </h3>
          <p>
            Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową
            kabiny i zredukowanymi fugami oraz po płaskim podwoziu. W połączeniu
            z zamkniętym przodem oraz dyfuzorem z tyłu i niezwykłymi detalami,
            takimi jak wpuszczane klamki czy zintegrowane z listwami szybowymi
            lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx
            wynoszący zaledwie 0,25. Dzięki temu łączy w sobie zasięg i
            wydajność z innowacyjną konstrukcją SAV-a.
          </p>
        </div>
      )}
      {type === "blocks" ? (
        <div className="images" data-aos="fade-up">
          <img src={foto1} alt="BMW iX from front side" />
          <img src={foto2} alt="Two cards sideways" />
        </div>
      ) : (
        <div className="images" data-aos="fade-up">
          <img src={foto4} alt="BMW iX from back side" />
          <img src={foto3} alt="BMW iX sideways" />
        </div>
      )}
    </ContentSection>
  );
};

export default ContentSectionComponent;
