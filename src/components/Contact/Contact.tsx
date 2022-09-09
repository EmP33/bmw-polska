import React from "react";
// Styles
import { PrimaryButton } from "../../Components.styles";
import { Container, Contact } from "./Contact.styles";
// Images
import frontBmw from "../../assets/images/bmw-ix-front.webp";
import sideBmw from "../../assets/images/13273-2022-bmw-ix.webp";
import { Path12, Path13, Path14, Path15 } from "../../assets";

// React hook form
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  gender: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
};
interface Props {
  handleGreetings: () => void;
}

const ContactComponent: React.FC<Props> = ({ handleGreetings }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleGreetings();

    setValue("gender", "");
    setValue("name", "");
    setValue("surname", "");
    setValue("email", "");
    setValue("phone", "");
  };

  return (
    <Container id="contact">
      <Contact>
        <img src={frontBmw} alt="bmw ix from front" data-aos="fade-right" />
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
          <h4>Wypełnij formularz swoimi danymi.</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__radio-btns">
              <label htmlFor="mr" className="container">
                <input
                  type="radio"
                  id="mr"
                  value="he"
                  {...register("gender", { required: true })}
                />
                <span
                  tabIndex={0}
                  aria-checked={watch("gender") === "he"}
                  role="radio"
                  className="checkmark"
                ></span>
                Pan
              </label>
              <label htmlFor="mrs" className="container">
                <input
                  type="radio"
                  id="mrs"
                  value="she"
                  {...register("gender", { required: true })}
                />
                <span
                  tabIndex={0}
                  aria-checked={watch("gender") === "she"}
                  role="radio"
                  className="checkmark"
                ></span>
                Pani
              </label>
              {errors.gender && <span role="alert">Wybierz płeć</span>}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Imię*"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span role="alert">Pole imię nie może być puste.</span>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Nazwisko*"
                {...register("surname", { required: true })}
              />
              {errors.surname && (
                <span role="alert">Pole nazwisko nie może być puste.</span>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="E-mail*"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
              />
              {errors.email && (
                <span role="alert">Wprowadź poprawny adres email.</span>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="Numer telefonu*"
                {...register("phone", { required: true, minLength: 9 })}
              />
              {errors.phone && (
                <span role="alert">Wprowadź poprawny numer.</span>
              )}
            </div>
            <PrimaryButton type="submit">WYŚLIJ</PrimaryButton>
          </form>
        </div>
        <img src={sideBmw} alt="bmw ix from side" data-aos="fade-left" />
      </Contact>
    </Container>
  );
};

export default ContactComponent;
