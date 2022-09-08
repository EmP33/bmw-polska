import ContentSection from "../ContentSection";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<ContentSection />", () => {
  it("should render ContentSection text type properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ContentSection type="text" dir="ltr" />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should render ContentSection blocks type properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ContentSection type="blocks" dir="rtl" />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
