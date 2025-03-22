"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import s from "./styles.module.css";

export default function Carousel() {
  return (
    <div className={s.container}>
      <Swiper
        className={s.swiper}
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={350}
        navigation={{
          prevEl: `.${s.swiper_prev}`,
          nextEl: `.${s.swiper_next}`,
        }}
      >
        <SwiperSlide>
          <div className={s.image}>
            <Image
              src="/assets/carousel/1.png"
              fill
              alt="Pessoas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.image}>
            <Image
              src="/assets/carousel/2.png"
              fill
              alt="Pessoas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.image}>
            <Image
              src="/assets/carousel/3.png"
              fill
              alt="Pessoas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.image}>
            <Image
              src="/assets/carousel/4.png"
              fill
              alt="Pessoas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>

        <div className={s.swiper_prev}>
          <FaChevronLeft />
        </div>
        <div className={s.swiper_next}>
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
}
