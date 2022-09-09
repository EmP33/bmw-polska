import styled from "styled-components";

export const Swiper = styled.div<{ swipeSlide: number }>`
  height: 100%;
  width: 300vw;
  color: #fff;
  display: flex;
  transform: ${(props) =>
    props.swipeSlide === 0
      ? "translateX(0)"
      : props.swipeSlide === 1
      ? "translateX(-100vw)"
      : "translateX(-200vw)"};
  transition: all 0.3s linear;

  .slide {
    width: 100vw;
    img {
      height: 100%;
      object-position: center;

      @media only screen and (max-width: 400px) {
        width: auto;
      }
      @media only screen and (min-width: 2150px) {
        width: 100%;
      }
    }
  }
`;

export const Pagination = styled.ul`
  position: absolute;
  left: 0;
  bottom: 12%;
  list-style: none;
  display: flex;
  column-gap: 5rem;
  width: 225px;

  @media only screen and (max-width: 1200px) {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    display: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 3.75rem;
    background-color: var(--color-white);
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: var(--color-gray-6);
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: var(--color-blue);
  }
`;
