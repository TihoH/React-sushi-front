import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";
import CustomBtnSwiper from "./CustomBtnSwiper";

export default function App({ sliderDataList }) {
  const swiperRef = useRef(null);

  return (
    <div>
      {/* Навигационные кнопки сверху */}

      <CustomBtnSwiper swiperRef={swiperRef} />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper min-h-[500px]"
      >
        {sliderDataList?.map((slideItem) => (
          <SwiperSlide key={slideItem.id}>
            <Link
              to={`/product/${slideItem.name}`}
              state={{ id: slideItem.id }}
            >
              <CardItem cardItem={slideItem} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
