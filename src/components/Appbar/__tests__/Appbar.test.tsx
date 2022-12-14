import Appbar from "../Appbar";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Appbar />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Appbar toggleMenu={jest.fn()} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
