import { useState, useEffect } from "react";

import { Laptop } from "lucide-react";

import BannerSlider from "@/layouts/components/BannerSlider";
import CategorySlider from "@/layouts/components/CategorySlider";
import ProductSection from "@/layouts/components/ProductSection";
import PromoBanners from "@/layouts/components/PromoBanners";

import {
    bannerData,
    categoriesData,
    macbookAirTags,
    macbookAirProducts,
    imacTags,
    imacProducts,
    midBanners,
    macbookProTags,
    macbookProProducts,
    phuKienTags,
    phuKienProducts,
} from "@/data/productData";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex w-full flex-col gap-8">
            {/* Banner */}
            <BannerSlider slides={bannerData} />

            {/* Trust bar */}
            <div className="flex w-full flex-wrap items-center justify-center rounded-md bg-black py-3 text-center text-sm text-white dark:bg-zinc-800 sm:text-[15px]">
                <span className="font-bold mr-1.5">iTuong</span>- Đại lý uỷ
                quyền chính thức của Apple Việt Nam (AAR)
            </div>

            {/* Categories */}
            <CategorySlider categories={categoriesData} loading={loading} />

            {/* MacBook Air */}
            <ProductSection
                icon={Laptop}
                title="MacBook Air"
                tags={macbookAirTags}
                products={macbookAirProducts}
                loading={loading}
                viewAllLink="/danh-muc/macbook-air"
                viewAllText="Xem tất cả MacBook Air"
            />

            {/* Promo */}
            <PromoBanners banners={midBanners} loading={loading} />

            {/* MacBook Pro */}
            <ProductSection
                icon={Laptop}
                title="MacBook Pro"
                tags={macbookProTags}
                products={macbookProProducts}
                loading={loading}
                viewAllLink="/danh-muc/macbook-pro"
                viewAllText="Xem tất cả MacBook Pro"
            />

            {/* iMac */}
            <ProductSection
                icon={Laptop}
                title="iMac & Mac Desktop"
                tags={imacTags}
                products={imacProducts}
                loading={loading}
                viewAllLink="/danh-muc/imac-mac-desktop"
                viewAllText="Xem tất cả iMac & Mac Desktop"
            />

            {/* Accessories */}
            <ProductSection
                icon={Laptop}
                title="Phụ kiện"
                tags={phuKienTags}
                products={phuKienProducts}
                loading={loading}
                viewAllLink="/danh-muc/phu-kien"
                viewAllText="Xem tất cả Phụ kiện"
            />
        </div>
    );
}

export default Home;
