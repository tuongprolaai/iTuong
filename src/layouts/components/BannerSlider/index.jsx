import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function BannerSlider({ slides }) {
  if (!slides || slides.length === 0) return null;

  return (
    <div className="w-full bg-[#e6f3ff]">
      <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        className="w-full h-full [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-[25px] [&_.swiper-pagination-bullet-active]:rounded-[5px]"
        style={{
          "--swiper-pagination-color": "#007bff",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
          "--swiper-pagination-bullet-opacity": "1",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              to={slide.link || "#"}
              className="block w-full md:aspect-[21/7]"
            >
              <img
                src={slide.image}
                alt={slide.title || `Slide ${index}`}
                className="w-full h-auto md:h-full block md:object-cover object-contain object-center"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
