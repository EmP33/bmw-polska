import styled from "styled-components";
import img from "../assets/images/slider1.png";
import imgMobile from "../assets/images/slider1-mobile.png";

export const Container = styled.main`
  width: 100%;
  height: 250vh; // TEMP

  .hero {
    position: relative;
    width: 100%;
    height: 88.4vh;
    background: transparent url(${img}) 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 360px) {
      background: transparent url(${imgMobile}) 0% 0% no-repeat padding-box;
      background-size: cover;
      background-position: right;
    }

    &::before {
      content: "";
      width: 50%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: transparent
        linear-gradient(90deg, var(--color-black) 0%, #00000000 100%) 0% 0%
        no-repeat padding-box;
      opacity: 0.75;
      z-index: 1;
    }

    &__wrapper {
      width: 70%;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      height: 100%;
      z-index: 2;
      display: grid;
      align-items: center;
      justify-items: center;

      @media only screen and (max-width: 600px) {
        width: 85%;
      }

      &_info {
        color: #fff;
        justify-self: start;

        @media only screen and (max-width: 600px) {
          align-self: start;
        }

        & > h1 {
          font-size: 4rem; // 64px
          font-family: var(--font-heading);

          @media only screen and (max-width: 600px) {
            font-size: 3rem; // 48px
            line-height: 4rem;

            span {
              display: block;
            }
          }
        }
        & > h3 {
          font-size: 1rem;
          font-family: var(--font-heading);
          font-weight: 600;

          @media only screen and (max-width: 600px) {
            font-weight: lighter;
            color: #d6d6d6;
          }
        }
      }
    }
  }
`;
