import React from "react";
// Styles
import { Pagination } from "./Swiper.styles";

interface Props {
  swipeSlide: number;
  handleChangeSlide: (numb: number) => void;
}

const PaginationComponent: React.FC<Props> = ({
  swipeSlide,
  handleChangeSlide,
}) => {
  return (
    <Pagination>
      <li>
        <label className="container">
          <input
            data-testid="pag1"
            type="radio"
            name="pagination"
            id="pag1"
            onChange={handleChangeSlide.bind(null, 0)}
            checked={swipeSlide === 0}
          />
          <span
            aria-checked={swipeSlide === 0}
            role="radio"
            className="checkmark"
            aria-label="Switch slide"
          ></span>
        </label>
      </li>
      <li>
        <label className="container">
          <input
            data-testid="pag2"
            type="radio"
            name="pagination"
            id="pag2"
            onChange={handleChangeSlide.bind(null, 1)}
            checked={swipeSlide === 1}
          />
          <span
            aria-checked={swipeSlide === 0}
            role="radio"
            className="checkmark"
            aria-label="Switch slide"
          ></span>
        </label>
      </li>

      <li>
        <label className="container">
          <input
            data-testid="pag3"
            type="radio"
            name="pagination"
            id="pag3"
            onChange={handleChangeSlide.bind(null, 2)}
            checked={swipeSlide === 2}
          />
          <span
            aria-checked={swipeSlide === 0}
            role="radio"
            className="checkmark"
            aria-label="Switch slide"
          ></span>
        </label>
      </li>
    </Pagination>
  );
};

export default PaginationComponent;
