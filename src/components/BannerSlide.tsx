import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const baseImages = [
  "https://cdn.wesushi.com.ua/ws-ukr/promotions/0005-zamovlyajte-set-ta-otrimujte-rol-u-podarunok-web-uk.png",
  "https://cdn.wesushi.com.ua/ws-ukr/promotions/0001-bezkoshtovna-dostavka-we-sushi-web-uk.png",
  "https://cdn.wesushi.com.ua/ws-ukr/promotions/0001-bonusna-programa-we-sushi-2025-web-uk.jpg?alt=media&token=2b9aca5d-3391-4753-bb83-cd9d6f334e56&w=1280&h=500&format=auto&mode=fit&q=80",
];

// "Умножим" массив, чтобы loop работал плавно
const images = [...baseImages, ...baseImages];

export default function BannerSlide() {
  return (
    <div className="-mx-[calc((100vw-100%)/2)] mt-2 hidden md:block md:mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={-15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", height: 300 , backgroundColor: 'none'}}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
