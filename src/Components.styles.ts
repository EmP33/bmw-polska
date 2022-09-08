import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: var(--color-blue);
  color: var(--color-white);
  padding: 0.75rem 5rem;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-family: var(--font-heading);
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  a {
    color: var(--color-white);
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.875rem;
    padding: 0.75rem 3.5rem;
  }

  &:hover {
    background-color: #2258c2;
  }
`;

export const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  background: transparent;
  border: none;

  span {
    width: 100%;
    height: 2px;
    background: var(--color-white);
    display: block;
    border-radius: 5px;
  }

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
