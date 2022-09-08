import React from "react";
// Styles
import { Container } from "./Footer.styles";
// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="socials">
          <span>Dołącz do nas</span>
          <div className="socials__icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links__client">
            <h5>Strefa Klienta</h5>
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
            <h5>Poznaj BMW</h5>
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
            <h5>Informacje prawne</h5>
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