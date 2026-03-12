import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function BannerSlider({ slides }) {
    if (!slides || slides.length === 0) return null;

    return (
        <div className="w-full overflow-hidden rounded-xl border border-border bg-muted/50 shadow-sm">
            <Swiper
                modules={[Autoplay, Pagination, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                className="
                h-full w-full
                [&_.swiper-pagination]:bottom-4
                [&_.swiper-pagination-bullet]:h-2.5
                [&_.swiper-pagination-bullet]:w-2.5
                [&_.swiper-pagination-bullet]:bg-white/50
                [&_.swiper-pagination-bullet]:opacity-100
                [&_.swiper-pagination-bullet]:transition-all
                [&_.swiper-pagination-bullet]:duration-300
                [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:w-[25px]
                [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:rounded-[5px]
                [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-white
                "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            to={slide.link || "#"}
                            className="group block w-full md:aspect-[21/7]"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title || `Slide ${index}`}
                                className="block h-auto w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] md:h-full md:object-cover"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BannerSlider;
