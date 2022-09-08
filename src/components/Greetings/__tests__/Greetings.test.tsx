import Greetings from "../Greetings";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Greetings />", () => {
  it("should render properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Greetings handleGreetings={jest.fn()} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
