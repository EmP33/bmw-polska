import Gallery from "../Gallery";
import { render, screen } from "@testing-library/react";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Gallery />", () => {
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
  it("should render properly", () => {
    renderProps();
    const renderer = new ReactShallowRenderer();
    renderer.render(<Gallery />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it("should show lower quality images on smaller screen size", () => {
    renderProps(true);
    render(<Gallery />);
    const imageElements: HTMLImageElement[] = screen.getAllByRole("img");

    for (let img of imageElements) {
      expect(img.src).not.toContain("@2x");
    }
  });

  it("should show higher quality images on screen size bigger than 900px", () => {
    renderProps();
    render(<Gallery />);
    const imageElements: HTMLImageElement[] = screen.getAllByRole("img");

    expect(imageElements[0].src).toContain("@2x");
    expect(imageElements[1].src).toContain("@2x");
    expect(imageElements[2].src).toContain("@2x");
    expect(imageElements[4].src).toContain("@2x");
  });
});
