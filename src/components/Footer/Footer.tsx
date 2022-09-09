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
          <div className="footer-links__client">
            <span>Strefa Klienta</span>
            <ul>
              <li>
                <a href="#">Centrum Obsługi Klienta BMW</a>
              </li>
              <li>
                <a href="#">Znajdź dealera BMW</a>
              </li>
              <li>
                <a href="#">Pobierz cenniki / broszury</a>
              </li>
              <li>
                <a href="#">Często zadawane pytania</a>
              </li>
            </ul>
          </div>
          <div className="footer-links__bmw">
            <span>Poznaj BMW</span>
            <ul>
              <li>
                <a href="#">Informacje prasowe</a>
              </li>
              <li>
                <a href="#">BMW Polska</a>
              </li>
              <li>
                <a href="#">Kariera</a>
              </li>
            </ul>
          </div>
          <div className="footer-links__info">
            <span>Informacje prawne</span>
            <ul>
              <li>
                <a href="#">Mapa serwisu</a>
              </li>
              <li>
                <a href="#">Nota prawna / Prywatność</a>
              </li>
              <li>
                <a href="#">Polityka cookie</a>
              </li>
              <li>
                <a href="#">Warunki korzystania z MyBMW</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="copyright">&copy; BMW Polska 2020</div>
      </div>
    </Container>
  );
};

export default Footer;
