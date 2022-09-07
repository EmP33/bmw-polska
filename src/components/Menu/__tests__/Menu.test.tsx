import Menu from "../Menu";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Menu />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    const toggleMenu = jest.fn();
    renderer.render(<Menu showMenu={true} toggleMenu={toggleMenu} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
