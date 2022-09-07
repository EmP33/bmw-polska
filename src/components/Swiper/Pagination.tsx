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
      <label className="container">
        <input
          type="radio"
          name="pagination"
          id="pag1"
          onChange={handleChangeSlide.bind(null, 0)}
          checked={swipeSlide === 0}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="pagination"
          id="pag1"
          onChange={handleChangeSlide.bind(null, 1)}
          checked={swipeSlide === 1}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="pagination"
          id="pag1"
          onChange={handleChangeSlide.bind(null, 2)}
          checked={swipeSlide === 2}
        />
        <span className="checkmark"></span>
      </label>
    </Pagination>
  );
};

export default PaginationComponent;
