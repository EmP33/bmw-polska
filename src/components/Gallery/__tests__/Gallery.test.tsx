import Gallery from "../Gallery";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { act } from "react-dom/test-utils";

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

  it("fullscreen photo should not be in the document without clicking on any of imageElements", () => {
    renderProps();
    render(<Gallery />);

    expect(
      screen.queryByAltText("Full screen bmw photo")
    ).not.toBeInTheDocument();
  });

  it("should show full screen photo when any of imageElements are clicked", async () => {
    renderProps();
    render(<Gallery />);
    const imageElements: HTMLImageElement[] = screen.getAllByRole("img");

    fireEvent.click(imageElements[0]);

    expect(
      await screen.findByAltText("Full screen bmw photo")
    ).toBeInTheDocument();
  });
});
