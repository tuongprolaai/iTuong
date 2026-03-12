import { useRef, useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

function CategorySlider({ categories = [], loading = false }) {
    const swiperRef = useRef(null);
    const [isLocked, setIsLocked] = useState(false);

    if (loading) {
        return (
            <Card className="relative w-full overflow-hidden border-0 bg-muted/40 px-4 py-6 md:px-10 md:py-8">
                <CardContent className="flex gap-4 p-0">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="flex w-full flex-col items-center gap-3"
                        >
                            <Skeleton className="h-[100px] w-[100px] rounded-lg" />
                            <Skeleton className="h-4 w-[80px]" />
                        </div>
                    ))}
                </CardContent>
            </Card>
        );
    }

    if (!categories.length) return null;

    return (
        <Card className="relative w-full overflow-hidden border-0 bg-muted/40 px-4 py-6 md:px-10 md:py-8 dark:bg-zinc-800/50">
            {/* Prev button */}
            {!isLocked && (
                <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    aria-label="Previous"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2
    rounded-md
    transition-colors
    hover:bg-primary hover:text-primary-foreground
    active:translate-y-[-50%] active:scale-95
    focus-visible:ring-0"
                >
                    <ChevronLeft size={18} />
                </Button>
            )}

            {/* Next button */}
            {!isLocked && (
                <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    aria-label="Next"
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2
    rounded-md
    transition-colors
    hover:bg-primary hover:text-primary-foreground
    active:translate-y-[-50%] active:scale-95
    focus-visible:ring-0"
                >
                    <ChevronRight size={18} />
                </Button>
            )}

            <CardContent className="p-0">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setIsLocked(swiper.isLocked);
                    }}
                    onResize={(swiper) => setIsLocked(swiper.isLocked)}
                    onLock={() => setIsLocked(true)}
                    onUnlock={() => setIsLocked(false)}
                    watchOverflow
                    centerInsufficientSlides
                    spaceBetween={12}
                    slidesPerView={2}
                    loop={categories.length >= 10}
                    breakpoints={{
                        576: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 24 },
                    }}
                    className="w-full"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                to={item.link || "#"}
                                className="group flex flex-col items-center
                                text-foreground
                                transition-all
                                duration-300
                                hover:-translate-y-1"
                            >
                                <div className="mb-3 flex h-[110px] w-full items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        draggable="false"
                                        className="h-full w-auto object-contain
                                        drop-shadow-sm
                                        transition-transform
                                        duration-300
                                        group-hover:scale-105"
                                    />
                                </div>

                                <h3
                                    className="text-center text-sm font-medium
                                    transition-colors
                                    group-hover:text-primary"
                                >
                                    {item.title}
                                </h3>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CardContent>
        </Card>
    );
}

export default CategorySlider;
