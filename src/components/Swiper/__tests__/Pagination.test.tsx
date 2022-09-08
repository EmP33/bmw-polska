import Pagination from "../Pagination";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Pagination />", () => {
  it("should render Pagination Component properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Pagination swipeSlide={0} handleChangeSlide={jest.fn()} />
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should first pagination radio button be checked by default", () => {
    render(<Pagination swipeSlide={0} handleChangeSlide={jest.fn()} />);
    const inputElement = screen.getByTestId("pag1") as HTMLInputElement;
    expect(inputElement.checked).toEqual(true);
  });

  it("should change swipeSlide value when every radio button is clicked", () => {
    let swipeSlide = 0;
    const handleChange = jest.fn().mockImplementation((numb: number) => {
      swipeSlide = numb;
    });
    render(
      <Pagination swipeSlide={swipeSlide} handleChangeSlide={handleChange} />
    );
    const inputElement1 = screen.getByTestId("pag1") as HTMLInputElement;
    const inputElement2 = screen.getByTestId("pag2") as HTMLInputElement;
    const inputElement3 = screen.getByTestId("pag3") as HTMLInputElement;

    expect(swipeSlide).toBe(0);

    fireEvent.click(inputElement1);
    expect(swipeSlide).toBe(0);

    fireEvent.click(inputElement2);
    expect(swipeSlide).toBe(1);

    fireEvent.click(inputElement3);
    expect(swipeSlide).toBe(2);
  });
});
