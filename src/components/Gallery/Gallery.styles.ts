import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 18vw);
  row-gap: 0.625rem;
  column-gap: 0.625rem;
  margin-bottom: 50rem; // TEMP
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 900px) {
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    row-gap: 0.25rem;
    column-gap: 0.25rem;
    grid-template-rows: repeat(4, 40vw);
    grid-template-columns: repeat(6, 1fr);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    &:nth-child(1) {
      grid-column: 1/7;
      grid-row: 1/-1;

      @media only screen and (max-width: 600px) {
        grid-column: 1/-1;
        grid-row: 1/3;
      }
    }
    &:nth-child(2) {
      grid-column: 7/9;
      @media only screen and (max-width: 600px) {
        grid-column: 1/3;
        grid-row: 3/4;
      }
    }
    &:nth-child(3) {
      grid-column: 7/10;
      grid-row: 2;
      @media only screen and (max-width: 600px) {
        grid-column: 1/4;
        grid-row: 4/-1;
      }
    }
    &:nth-child(4) {
      grid-column: 9/-1;
      @media only screen and (max-width: 600px) {
        grid-column: 3/-1;
        grid-row: 3/4;
      }
    }
    &:nth-child(5) {
      grid-column: 10/-1;
      grid-row: 2;
      @media only screen and (max-width: 600px) {
        grid-column: 4/-1;
        grid-row: 4/-1;
      }
    }
  }
`;
