import Swiper from "../Swiper";
import ReactShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import "jest-styled-components";
import styled from "styled-components";
import { render, screen } from "@testing-library/react";

const StyledSwiper = styled.div<{ swipeSlide: number }>`
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
    }
  }
`;

describe("<Swiper />", () => {
  const renderProps = (matches?: boolean = false) => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: matches, // matches
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };
  it("should render Swiper Component properly", () => {
    renderProps();
    const renderer = new ReactShallowRenderer();
    renderer.render(<Swiper swipeSlide={0} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should have transform translateX(0) style when swipeSlide is 0", () => {
    renderProps();
    const swiper = renderer.create(<StyledSwiper swipeSlide={0} />).toJSON();
    expect(swiper).toHaveStyleRule("transform", "translateX(0)");
  });

  it("should have transform translateX(-100vw) style when swipeSlide is 1", () => {
    renderProps();
    const swiper = renderer.create(<StyledSwiper swipeSlide={1} />).toJSON();
    expect(swiper).toHaveStyleRule("transform", "translateX(-100vw)");
  });

  it("should have transform translateX(-200vw) style when swipeSlide is 2", () => {
    renderProps();
    const swiper = renderer.create(<StyledSwiper swipeSlide={2} />).toJSON();
    expect(swiper).toHaveStyleRule("transform", "translateX(-200vw)");
  });

  it("should use mobile image when screen resolution is less than 360px", () => {
    renderProps();
    render(<Swiper swipeSlide={0} />);
    const imageElements = screen.getAllByAltText(
      "New BMW iX slide"
    ) as HTMLImageElement[];

    expect(imageElements[0].src).toContain("slider1-mobile.png");
    expect(imageElements[1].src).toContain("slider1-mobile.png");
    expect(imageElements[2].src).toContain("slider1-mobile.png");
  });

  it("should use normal image when screen resolution is greater than 360px", () => {
    renderProps(true);
    render(<Swiper swipeSlide={0} />);
    const imageElements = screen.getAllByAltText(
      "New BMW iX slide"
    ) as HTMLImageElement[];

    expect(imageElements[0].src).toContain("slider1.png");
    expect(imageElements[1].src).toContain("slider1.png");
    expect(imageElements[2].src).toContain("slider1.png");
  });
});
