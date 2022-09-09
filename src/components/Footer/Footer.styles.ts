import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 30vh;
  background-color: var(--color-gray-7);
  display: grid;
  font-family: var(--font-secondary);

  .wrapper {
    width: 75%;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      width: 85%;
    }
    @media only screen and (max-width: 900px) {
      width: 95%;
    }
    @media only screen and (max-width: 650px) {
      width: 85%;
    }
  }

  .socials {
    width: 100%;
    border-bottom: 1px solid var(--color-gray-6);
    padding: 1.5rem 0 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    justify-content: end;
    column-gap: 1.75rem;

    @media only screen and (max-width: 650px) {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: max-content;
      justify-content: start;
      row-gap: 2rem;
      padding: 4rem 0 1.5rem 0;
    }

    span {
      font-size: 1.25rem;
      color: var(--color-gray-3);
      font-weight: 300;
      display: block;
    }

    &__icons {
      display: grid;
      align-items: grid;
      column-gap: 1.75rem;

      svg {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        fill: #333;
        cursor: pointer;
        grid-row: 2;

        &:hover {
          fill: #222;
        }
      }
    }
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 0 5rem 0;

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }

    & > div {
      span {
        color: var(--color-gray-3);
        font-size: 1.25rem;
        font-weight: 300;
        display: block;
        margin-bottom: 2rem;
      }

      ul {
        list-style: none;
        display: grid;
        row-gap: 0.5rem;

        a {
          color: var(--color-gray-3);
          text-decoration: none;
          font-weight: bold;
          font-size: 0.875rem;

          @media only screen and (max-width: 650px) {
            font-size: 0.75rem;
          }

          &:hover {
            color: #333;
          }
        }
      }
    }
  }

  .copyright-wrapper {
    background-color: var(--color-white);
    .copyright {
      width: 75%;
      margin: 0 auto;
      padding: 1.5rem 0 1.5rem 0;
      font-size: 0.875rem;
      font-family: var(--font-primary);
      color: var(--color-gray-1);
      @media only screen and (max-width: 1200px) {
        width: 85%;
      }
      @media only screen and (max-width: 900px) {
        width: 95%;
      }
      @media only screen and (max-width: 650px) {
        text-align: center;
      }
    }
  }
`;
