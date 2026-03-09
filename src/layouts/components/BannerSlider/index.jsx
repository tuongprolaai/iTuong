import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Keyboard thay cho Navigation
import { Autoplay, Pagination, EffectFade, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Không cần import swiper/css/navigation nữa
import styles from "./BannerSlider.module.scss";

function BannerSlider({ slides }) {
  if (!slides || slides.length === 0) return null;

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
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
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link || "#"} className={styles.slideLink}>
              <img src={slide.image} alt={slide.title || `Slide ${index}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
