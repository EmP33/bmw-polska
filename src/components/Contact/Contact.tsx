import React from "react";
// Styles
import { PrimaryButton } from "../../Components.styles";
import { Container, Contact } from "./Contact.styles";
// Images
import frontBmw from "../../assets/images/bmw-ix-front.png";
import sideBmw from "../../assets/images/13273-2022-bmw-ix.png";
import { Path12, Path13, Path14, Path15 } from "../../assets";

const ContactComponent = () => {
  return (
    <Container>
      <Contact>
        <img src={frontBmw} alt="bmw ix from front" />
        <Path12 />
        <Path13 />
        <Path14 />
        <Path15 />
        <div className="contact__header">
          <h3>
            UMÓW JAZDĘ PRÓBNĄ <sup>BMW iX</sup>
          </h3>
          <p>
            Zachęcamy do ograniczenia poruszania się i pozostania w domu. <br />
            Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie
            poniższego formularza.
          </p>
        </div>
        <div className="contact__form">
          <h6>Wypełnij formularz swoimi danymi.</h6>
          <form onSubmit={() => console.log("submitted")}>
            <div className="contact__radio-btns">
              <label htmlFor="mr" className="container">
                <input type="radio" name="gender" id="mr" />
                <span className="checkmark"></span>
                Pan
              </label>
              <label htmlFor="mrs" className="container">
                <input type="radio" name="gender" id="mrs" />
                <span className="checkmark"></span>
                Pani
              </label>
            </div>
            <input type="text" placeholder="Imię*" />
            <input type="text" placeholder="Nazwisko*" />
            <input type="text" placeholder="E-mail*" />
            <input type="text" placeholder="Numer telefonu*" />
            <PrimaryButton type="submit">WYŚLIJ</PrimaryButton>
          </form>
        </div>
        <img src={sideBmw} alt="bmw ix from side" />
      </Contact>
    </Container>
  );
};

export default ContactComponent;
