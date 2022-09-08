import Menu from "../Menu";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { render, screen, fireEvent } from "@testing-library/react";

import renderer from "react-test-renderer";
import "jest-styled-components";
import styled from "styled-components";

export const StyledMenu = styled.div<{ showMenu: boolean }>`
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  color: var(--color-white);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  align-items: center;
  justify-items: center;
  transform: ${(props) =>
    props.showMenu ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.2s linear;

  .menu-action {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
    row-gap: 1rem;
    padding: 1rem 2rem 0 0;

    & > div {
      border-bottom: 1px solid #343434;
    }

    svg {
      width: 40px;
      height: 40px;
      grid-column: 2/-1;
      margin-bottom: 1rem;
    }

    button {
      grid-column: 2/-1;
      font-size: 3rem;
      background: none;
      border: none;
      color: #858585;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  ul {
    list-style: none;
    text-align: center;
    width: 70%;
    margin: 0 auto;

    & > li {
      font-family: var(--font-heading);
      font-weight: 600;
      padding: 2rem 0 2rem 0;
      cursor: pointer;

      &:hover {
        color: var(--color-gray-6);
      }

      &:not(:last-child) {
        border-bottom: 1px solid #343434;
      }
    }
  }

  & > button {
    margin-bottom: 5rem;
  }
`;

describe("<Menu />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    const toggleMenu = jest.fn();
    renderer.render(<Menu showMenu={true} toggleMenu={toggleMenu} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should have transform translateX(-100%) by default", () => {
    const menu = renderer.create(<StyledMenu showMenu={false} />).toJSON();
    expect(menu).toHaveStyleRule("transform", "translateX(-100%)");
  });
  it("should have transform translateX(0) when showMenu is truthy", () => {
    const menu = renderer.create(<StyledMenu showMenu={true} />).toJSON();
    expect(menu).toHaveStyleRule("transform", "translateX(0)");
  });

  it("should change transform property when button is clicked", () => {
    let showMenu = true;
    const toggleMenu = jest.fn().mockImplementation(() => {
      showMenu = !showMenu;
    });
    render(<Menu showMenu={showMenu} toggleMenu={toggleMenu} />);
    const styledMenu = renderer
      .create(<StyledMenu showMenu={showMenu} />)
      .toJSON();

    expect(styledMenu).toHaveStyleRule("transform", "translateX(0)");

    const button = screen.getByRole("button", { name: "×" });

    fireEvent.click(button);

    const styledMenuAgain = renderer
      .create(<StyledMenu showMenu={showMenu} />)
      .toJSON();

    expect(styledMenuAgain).toHaveStyleRule("transform", "translateX(-100%)");
  });
});
