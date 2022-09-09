import React from "react";
// Styles
import { Container } from "./Footer.styles";
// Icons
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets";
// Components
import FooterLinksBlock from "./FooterLinksBlock";

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="socials">
          <span>Dołącz do nas</span>
          <div className="socials__icons">
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <LinkedinIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="footer-links">
          <FooterLinksBlock
            title="Strefa Klienta"
            elements={[
              "Centrum Obsługi Klienta BMW",
              "Znajdź dealera BMW",
              "Pobierz cenniki / broszury",
              "Często zadawane pytania",
            ]}
          />
          <FooterLinksBlock
            title="Poznaj BMW"
            elements={["Informacje prasowe", "BMW Polska", "Kariera"]}
          />
          <FooterLinksBlock
            title="Informacje prawne"
            elements={[
              "Mapa serwisu",
              "Nota prawna / Prywatność",
              "Polityka cookie",
              "Warunki korzystania z MyBMW",
            ]}
          />
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="copyright">&copy; BMW Polska 2020</div>
      </div>
    </Container>
  );
};

export default Footer;
