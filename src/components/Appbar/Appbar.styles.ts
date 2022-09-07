import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  color: var(--color-white);
  align-self: start;
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-top: 1rem;
  column-gap: 2rem;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
  }

  ul {
    list-style-type: none;
    display: flex;
    column-gap: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 0.5rem;

    @media only screen and (max-width: 900px) {
      display: none;
    }

    li {
      font-size: 1.125rem;
      font-family: var(--font-heading);
      font-weight: bold;
      letter-spacing: 0.9px;
      padding-bottom: 1rem;
      border-bottom: 3px solid transparent;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid var(--color-blue);
      }
    }
  }

  p {
    font-size: 1rem;
    font-family: var(--font-heading);
    font-weight: 400;
    justify-self: end;
    padding-top: 0.5rem;

    @media only screen and (max-width: 900px) {
      display: none;
    }

    span {
      font-weight: bold;
    }
  }
`;
