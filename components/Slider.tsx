"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ImageLink from "./ImageLink";
import { links } from "@/data/Links";

const Slider: React.FC = () => {
  return (
    <Swiper
      className="w-full h-[525px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {links.map((link, index) => (
        <SwiperSlide key={index}>
          <ImageLink href={link.href} src={link.src} alt={link.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
