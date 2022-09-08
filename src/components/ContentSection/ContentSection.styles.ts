import styled from "styled-components";

export const ContentSection = styled.section<{ type: "blocks" | "text" }>`
  margin: ${({ type }) => (type === "text" ? "0 auto" : "0 auto 3rem")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 92%;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .images {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    column-gap: 1rem;
    grid-row: 1/2;
    grid-column: ${({ type }) => (type === "blocks" ? 1 : 2)};

    @media only screen and (max-width: 1200px) {
      grid-template-rows: ${({ type }) =>
        type === "blocks" ? "repeat(5, 1fr)" : "repeat(4, 1fr)"};
      margin-bottom: ${({ type }) => (type === "blocks" ? "0" : "3rem")};
      grid-row: 1;
      grid-column: 1/-1;
    }

    @media only screen and (max-width: 600px) {
      max-height: 500px;
    }

    img {
      width: 100%;
      height: auto;

      &:nth-child(1) {
        grid-column: ${({ type }) => (type === "text" ? "5/ -1" : "1/3")};
        grid-row: ${({ type }) => (type === "text" ? "1 / 3" : "3/-1")};
      }
      &:nth-child(2) {
        grid-column: ${({ type }) => (type === "blocks" ? "3/ -1" : "1/5")};
        grid-row: ${({ type }) => (type === "blocks" ? "1 / 5" : "2/5")};
      }
    }
  }

  .content {
    padding-left: ${({ type }) => (type === "text" ? "0" : "7.5rem")};
    width: ${({ type }) => (type === "text" ? "536px" : "auto")};
    display: grid;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    grid-column: ${({ type }) => (type === "blocks" ? 2 : 1)};

    @media only screen and (max-width: 1200px) {
      grid-row: 2;
      grid-column: 1/-1;
    }

    @media only screen and (max-width: 900px) {
      padding: 0 0.5rem 0 0.5rem;
    }
    @media only screen and (max-width: 600px) {
      width: auto;
    }

    svg {
      width: ${({ type }) => (type === "text" ? "50px" : "25px")};
      height: ${({ type }) => (type === "text" ? "50px" : "50px")};
      transform: ${({ type }) => (type === "text" ? "rotateY(180deg)" : "0")};
      fill: var(--color-gray-4);
    }
    h2 {
      width: 300px;
      font-size: 2.25rem;
      font-family: var(--font-heading);
      font-weight: bold;
      line-height: 2.5rem;
      margin-bottom: 3rem;

      @media only screen and (max-width: 900px) {
        font-size: 1.5rem;
        width: 200px;
      }
    }

    h4 {
      font-size: 1.25rem;
      font-family: var(--font-primary);
      font-weight: 300;
      color: var(--color-gray-3);
      margin-bottom: 2rem;
    }

    p {
      font-size: 0.875rem;
      font-family: var(--font-primary);
      color: var(--color-gray-1);
      line-height: 1.25rem;
    }

    .content__blocks {
      display: flex;
      flex-wrap: wrap;
      column-gap: 2rem;
      row-gap: 4rem;

      .block {
        height: 120px;
        width: 191px;

        @media only screen and (max-width: 600px) {
          width: 100%;
          height: auto;
        }
        h6 {
          font-size: 0.75rem;
          font-family: var(--font-heading);
          font-weight: bold;
          position: relative;
          padding-bottom: 0.3rem;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 10%;
            height: 2px;
            background: var(--color-gray-2);
            z-index: 2;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--color-gray-6);
          }
        }
        p {
          font-size: 0.875rem;
          color: var(--color-gray-1);
          padding-top: 1rem;
          font-family: var(--font-primary);
        }
      }
    }
  }
`;
