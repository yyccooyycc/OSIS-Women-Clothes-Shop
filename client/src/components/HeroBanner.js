import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/HeroBanner.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const HeroBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="swiper-heroBanner"
    >
      <SwiperSlide>
        <img
          src={require("../assets/images/catia-dombaxe-lECqVvkkrsg-unsplash.jpg")}
          alt="Banner 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../assets/images/insung-yoon-DaXtJRlqCxY-unsplash.jpg")}
          alt="Banner 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require("../assets/images/mathieu-deslauriers-aMThIz2KAT4-unsplash.jpg")}
          alt="Banner 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanner;
