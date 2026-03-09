import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./CategorySlider.module.scss";

function CategorySlider({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className={styles.categoryWrapper}>
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={10}
          slidesPerView={2}
          grabCursor={true}
          loop={true}
          breakpoints={{
            576: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className={styles.myCategorySwiper}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link || "#"} className={styles.categoryItem}>
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.title} draggable="false" />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategorySlider;
