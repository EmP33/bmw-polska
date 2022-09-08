import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 3rem auto 0;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const Contact = styled.nav`
  max-width: 750px;
  box-shadow: 3px 3px 60px #00000012;
  display: grid;
  background: var(--color-white);
  position: relative;
  margin: 5rem 0 10rem 0;

  @media only screen and (max-width: 600px) {
    box-shadow: none;
    margin: 20rem 0 25rem 0;
  }

  svg {
    position: absolute;
    z-index: 4;

    &:nth-of-type(1) {
      left: -350px;
      bottom: 175px;
    }
    &:nth-of-type(2) {
      left: -150px;
      top: 175px;
    }
    &:nth-of-type(3) {
      right: -300px;
      top: 200px;
      transform: rotate(250deg);
    }
    &:nth-of-type(4) {
      right: 50px;
      bottom: -125px;
      transform: rotate(-0deg);
    }
  }

  img {
    position: absolute;
    z-index: 5;

    &:nth-of-type(1) {
      right: -400px;
      top: 150px;

      @media only screen and (max-width: 600px) {
        left: -200px;
        top: -350px;
        width: 550px;
      }
    }
    &:nth-of-type(2) {
      left: -300px;
      bottom: 0;

      @media only screen and (max-width: 600px) {
        left: 30%;
        bottom: -350px;
        width: 550px;
      }
    }
  }

  & > .contact__header {
    position: relative;
    z-index: 10;
    background-color: var(--color-white);
    padding: 4rem 4rem 2rem 4rem;

    @media only screen and (max-width: 600px) {
      padding: 0rem 2rem 1rem 2rem;
    }

    h3 {
      font-family: var(--font-heading);
      font-size: 2.25rem;

      @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
      }

      sup {
        font-size: 1rem;
      }
    }
    p {
      font-family: var(--font-primary);
      color: var(--color-gray-3);
      line-height: 2.5rem;
      font-size: 1.25rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }
  }

  & > .contact__form {
    position: relative;
    z-index: 10;
    background-color: var(--color-white);
    padding: 2rem 4rem 4rem 4rem;

    @media only screen and (max-width: 600px) {
      padding: 1rem 2rem 2rem 2rem;
    }
    h4 {
      font-size: 1.25rem;
      font-family: var(--font-heading);
      font-weight: 600;
    }

    form {
      margin-top: 1rem;
      display: grid;
      row-gap: 2rem;
      width: 75%;

      @media only screen and (max-width: 600px) {
        width: 100%;
        row-gap: 1rem;
      }

      [role="alert"] {
        color: red;
        font-family: var(--font-heading);
        font-size: 0.875rem;
      }

      .contact__radio-btns {
        display: grid;
        column-gap: 1.5rem;
        color: var(--color-gray-3);
        font-size: 1.25rem;
        grid-template-columns: repeat(2, max-content);

        /* The container */
        .container {
          position: relative;
          padding-left: 30px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          @media only screen and (max-width: 600px) {
            font-size: 0.8125rem;
          }
        }

        /* Hide the browser's default checkbox */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background-color: var(--color-white);
          border: 2px solid var(--color-gray-6);
        }

        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
          background-color: var(--color-gray-4);
        }

        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
          background-color: var(--color-blue);
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark when checked */
        .container input:checked ~ .checkmark {
          border: none;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
          left: 7.5px;
          top: 5px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }

      input {
        width: 100%;
        padding: 1rem 0 1rem 1rem;
        color: var(--color-gray-1);
        font-size: 0.875rem;
        border: 1px solid var(--color-gray-4);

        @media only screen and (max-width: 600px) {
          font-size: 0.8125rem;
        }
      }

      button {
        justify-self: start;
      }
    }
  }
`;
