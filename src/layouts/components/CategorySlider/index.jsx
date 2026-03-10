import { useRef, useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function CategorySlider({ categories }) {
  const swiperRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);

  if (!categories || categories.length === 0) return null;

  return (
    <div className="w-full bg-[#ebebeb] py-[40px]">
      <div className="container mx-auto relative px-[40px]">
        {!isLocked && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[30px] h-[30px] bg-[#cecece] hover:bg-[#a3a3a3] rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M6.5 1L2.5 5L6.5 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {!isLocked && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[30px] h-[30px] bg-[#cecece] hover:bg-[#a3a3a3] rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M3.5 1L7.5 5L3.5 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsLocked(swiper.isLocked);
          }}
          onResize={(swiper) => setIsLocked(swiper.isLocked)}
          onLock={() => setIsLocked(true)}
          onUnlock={() => setIsLocked(false)}
          watchOverflow={true}
          centerInsufficientSlides={true}
          spaceBetween={10}
          slidesPerView={2}
          grabCursor={true}
          loop={categories.length > 5}
          breakpoints={{
            576: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="w-full py-[15px]"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={item.link || "#"}
                className="flex flex-col items-center no-underline text-[#111111] transition-transform duration-300 ease-in-out hover:-translate-y-[5px]"
              >
                <div className="w-full h-[120px] flex items-center justify-center mb-[15px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable="false"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-[16px] font-normal text-center m-0">
                  {item.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategorySlider;
