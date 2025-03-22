"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "@/components/button";

import { FaNewspaper, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import s from "./styles.module.css";

export default function News() {
  return (
    <div className={s.container}>
      <h1>NOTÍCIAS</h1>
      <p>
        Esteja por dentro de todas as atualizações e benefícios para os
        colaboradores da UFRN, IFRN, UFERSA e Entidades Associadas! Confira
        nossa seção de notícias CAURN e informe-se!
      </p>

      <div className={s.carousel}>
        <Swiper
          className={s.swiper}
          modules={[Autoplay, Navigation]}
          spaceBetween={32}
          slidesPerView={3}
          watchSlidesProgress={true}
          centeredSlides={false}
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
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <SwiperSlide key={index} className={s.swiper_slide}>
                  <div className={s.card}>
                    <div className={s.row}>
                      <FaNewspaper />
                      <span>25/08/2024</span>
                    </div>
                    <h1>
                      Autorizações enviadas pelo WhatsApp serão devolvidas pelo
                      mesmo canal
                    </h1>
                    <p>
                      A CAURN informa aos seus associados que realizou uma
                      atualização no processo de envio de guias para autorização
                      de exames...
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}

          <div className={s.swiper_prev}>
            <FaChevronLeft />
          </div>
          <div className={s.swiper_next}>
            <FaChevronRight />
          </div>
        </Swiper>
      </div>
      <Button>EXIBIR MAIS NOTÍCIAS</Button>
    </div>
  );
}
