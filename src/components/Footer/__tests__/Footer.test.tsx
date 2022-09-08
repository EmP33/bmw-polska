import Footer from "../Footer";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Footer />", () => {
  it("should render Footer properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Footer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
