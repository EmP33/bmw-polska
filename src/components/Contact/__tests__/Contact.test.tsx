import Contact from "../Contact";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Contact />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Contact handleGreetings={jest.fn()} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should show no errors by default", () => {
    render(<Contact handleGreetings={jest.fn()} />);
    const errorMessages = screen.queryAllByTestId("error");
    expect(errorMessages).toStrictEqual([]);
  });

  it("should show errors when submit button is clicked without any values", async () => {
    render(<Contact handleGreetings={jest.fn()} />);
    const submitButton = screen.getByRole("button", { name: "WYŚLIJ" });

    userEvent.click(submitButton);
    expect(await screen.findAllByRole("alert")).toHaveLength(5);
  });

  it("should display email error when email is invalid", async () => {
    render(<Contact handleGreetings={jest.fn()} />);
    const submitButton = screen.getByRole("button", { name: "WYŚLIJ" });
    const emailInput = screen.getByPlaceholderText("E-mail*");

    userEvent.type(emailInput, "examplegmail.com");
    userEvent.click(submitButton);

    expect(
      await screen.findByText("Wprowadź poprawny adres email.")
    ).toBeInTheDocument();
  });

  it("should display phone error when phone is invalid", async () => {
    render(<Contact handleGreetings={jest.fn()} />);
    const submitButton = screen.getByRole("button", { name: "WYŚLIJ" });
    const phoneInput = screen.getByPlaceholderText("Numer telefonu*");

    userEvent.type(phoneInput, "12345");
    userEvent.click(submitButton);

    expect(
      await screen.findByText("Wprowadź poprawny numer.")
    ).toBeInTheDocument();
  });

  it("should be no error when all input values are correct", async () => {
    render(<Contact handleGreetings={jest.fn()} />);
    const submitButton = screen.getByRole("button", { name: "WYŚLIJ" });
    const radioButton = screen.getByLabelText("Pan");
    const nameInput = screen.getByPlaceholderText("Imię*");
    const surnameInput = screen.getByPlaceholderText("Nazwisko*");
    const emailInput = screen.getByPlaceholderText("E-mail*");
    const phoneInput = screen.getByPlaceholderText("Numer telefonu*");
    userEvent.click(radioButton);
    userEvent.type(nameInput, "John");
    userEvent.type(surnameInput, "Doe");
    userEvent.type(phoneInput, "666555999");
    userEvent.type(emailInput, "johndoe@gmail.com");
    userEvent.click(submitButton);

    expect(screen.queryByRole("alert")).toBe(null);
  });
});
