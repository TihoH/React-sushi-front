import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";

const CustomBtnSwiper = ({ swiperRef }) => {
  // Перейти к предыдущему слайду
  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  // Перейти к следующему слайду
  const slideNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div className="flex justify-end gap-2 mb-2">
        <button
          onClick={slidePrev}
          className="px-4 py-2 bg-gray-200 rounded hover:text-red-400 transition"
          aria-label="Предыдущий слайд"
        >
          <ChevronsLeft />
        </button>
        <button
          onClick={slideNext}
          className="px-4 py-2 bg-gray-200 rounded hover:text-green-400 transition"
          aria-label="Следующий слайд"
        >
          <ChevronsRight />
        </button>
    </div>
  );
};

export default CustomBtnSwiper;
