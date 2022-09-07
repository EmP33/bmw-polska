import Appbar from "../Appbar";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Appbar />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Appbar />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
