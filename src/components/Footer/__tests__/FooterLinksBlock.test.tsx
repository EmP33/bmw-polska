import FooterLinksBlock from "../FooterLinksBlock";
import ReactShallowRenderer from "react-test-renderer/shallow";

describe("<Footer />", () => {
  it("should render Footer properly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <FooterLinksBlock
        title="Informacje prawne"
        elements={[
          "Mapa serwisu",
          "Nota prawna / Prywatność",
          "Polityka cookie",
          "Warunki korzystania z MyBMW",
        ]}
      />
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
