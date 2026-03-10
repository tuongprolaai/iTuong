import banner from "@/assets/img/banner.png";
import macbook from "@/assets/img/macbook-icon.png";
import macair from "@/assets/img/macair.jpg";
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";

import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import BannerSlider from "@/layouts/components/BannerSlider";
import CategorySlider from "@/layouts/components/CategorySlider";
import ProductSection from "@/layouts/components/ProductSection";
import PromoBanners from "@/layouts/components/PromoBanners";

function Home() {
  const bannerData = [
    {
      image: banner,
      link: "/macbook-air-m4",
      title: "MacBook Air M4",
    },
    {
      image: banner,
      link: "/macbook-air-m4",
      title: "MacBook Air M4",
    },
  ];

  const categoriesData = [
    { title: "MacBook Air", image: macbook, link: "/macbook-air" },
    { title: "MacBook Pro", image: macbook, link: "/macbook-pro" },
    { title: "iMac & Mac Desktop", image: macbook, link: "/imac" },
    { title: "iPad", image: macbook, link: "/ipad" },
    { title: "iPhone", image: macbook, link: "/iphone" },
    { title: "iPhone", image: macbook, link: "/iphone" },
    { title: "iPhone", image: macbook, link: "/iphone" },
  ];

  const macbookAirTags = [
    "MacBook Air M4",
    "MacBook Air M3",
    "MacBook Air M2",
    "MacBook Air M1",
    "MacBook Air Intel",
  ];

  const macbookAirProducts = [
    {
      name: "MacBook Air 2025 13 inch",
      specs: "Apple M4 16GB RAM 256GB SSD - NEW",
      price: "24.990.000đ",
      image: macair,
      badge: "BÁN CHẠY",
      badgeColor: "#ff0000",
      link: "/san-pham/macbook-air-m4",
    },
    {
      name: "MacBook Air 2022 13 inch",
      specs: "Apple M2 16GB RAM 256GB SSD - NEW",
      price: "19.690.000đ",
      image: macair,
      link: "/san-pham/macbook-air-m2",
    },
    {
      name: "MacBook Air 2025 13 inch",
      specs: "Apple M4 16GB RAM 512GB SSD - NEW",
      price: "29.990.000đ",
      image: macair,
      badge: "BÁN CHẠY",
      badgeColor: "#ff0000",
      link: "/san-pham/macbook-air-m4-512",
    },
    {
      name: "MacBook Air 2020 13 inch",
      specs: "Apple M1 8GB RAM 256GB SSD - Like New",
      price: "13.600.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/macbook-air-m1",
    },
  ];

  const imacTags = ["iMac", "Mac mini", "Mac Studio", "Mac Pro"];

  const imacProducts = [
    {
      name: "Mac mini 2024",
      specs: "Apple M4 16GB RAM 256GB SSD - NEW",
      price: "14.590.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/mac-mini-2024",
    },
    {
      name: "iMac 2024 24 inch Retina 4.5K",
      specs: "Apple M4 16GB RAM 256GB SSD 8-Core GPU - NEW",
      price: "33.190.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/imac-m4",
    },
    {
      name: "iMac 2020 21.5 inch Retina 4K MHK33",
      specs: "Core i7 3.2GHz 32GB RAM 512GB SSD - Like New",
      price: "14.500.000đ",
      image: macair,
      badge: "BÁN CHẠY",
      badgeColor: "#ff0000",
      link: "/san-pham/imac-intel",
    },
    {
      name: "iMac 2024 24 inch Retina 4.5K",
      specs: "Apple M4 24GB RAM 512GB SSD 8-Core GPU - NEW",
      price: "42.890.000đ",
      image: macair,
      link: "/san-pham/imac-m4-24gb",
    },
  ];

  const midBanners = [
    {
      image: banner,
      link: "/khuyen-mai/macbook-pro",
    },
    {
      image: banner1,
      link: "/khuyen-mai/mac-mini",
    },
    {
      image: banner2,
      link: "/khuyen-mai/macbook-air",
    },
  ];

  const macbookProTags = [
    "MacBook Pro M5",
    "MacBook Pro M4",
    "MacBook Pro M3",
    "MacBook Pro M2",
    "MacBook Pro M1",
    "MacBook Pro Intel",
  ];

  const macbookProProducts = [
    {
      name: "MacBook Pro 2025 14 inch",
      specs: "Apple M5 10-Core CPU 10-Core GPU 16GB RAM 512GB SSD - NEW",
      price: "40.690.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/macbook-pro-m5-14",
    },
    {
      name: "MacBook Pro 2021 14 inch",
      specs:
        "Apple M1 PRO 8-Core CPU 14-Core GPU 16GB RAM 512GB SSD - Like New",
      price: "27.000.000đ",
      image: macair,
      badge: "BÁN CHẠY",
      badgeColor: "#ff0000",
      link: "/san-pham/macbook-pro-m1-14",
    },
    {
      name: "MacBook Pro 2021 16 inch",
      specs:
        "Apple M1 PRO 10-Core CPU 16-core GPU 16GB RAM 512GB SSD - Like New",
      price: "27.500.000đ",
      image: macair,
      link: "/san-pham/macbook-pro-m1-16",
    },
    {
      name: "MacBook Pro 2024 14 inch",
      specs: "Apple M4 PRO 12-Core CPU 16-Core GPU 24GB RAM 512GB SSD - NEW",
      price: "49.890.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/macbook-pro-m4-14",
    },
  ];

  const phuKienTags = [
    "Màn hình",
    "AirPods",
    "Phụ kiện Apple",
    "Phụ kiện MacBook",
    "Phụ kiện khác",
    "iPad",
  ];

  const phuKienProducts = [
    {
      name: "Apple Magic Mouse 2024 (USB-C)",
      specs: "Multi-Touch Surface – NEW",
      price: "2.060.000đ",
      image: macair,
      badge: "MỚI",
      badgeColor: "#8cc63f",
      link: "/san-pham/magic-mouse-2024",
    },
    {
      name: "Tai nghe AirPods 4 chính hãng",
      specs: "(USB-C) – NEW",
      price: "3.490.000đ",
      image: macair,
      badge: "SẴN HÀNG",
      badgeColor: "#8cc63f",
      link: "/san-pham/airpods-4",
    },
    {
      name: "Cáp chuyển Ugreen 6 in 1 Type-C",
      specs: "to HDMI/USB-C/USB 3.0/SD/TF (70411)",
      price: "1.200.000đ",
      image: macair,
      badge: "BÁN CHẠY",
      badgeColor: "#ff0000",
      link: "/san-pham/ugreen-hub",
    },
    {
      name: "Chuột không dây Logitech Pebble 2",
      specs: "M350S – NEW",
      price: "490.000đ",
      image: macair,
      link: "/san-pham/logitech-pebble",
    },
  ];

  return (
    <>
      <BannerSlider slides={bannerData} />

      <div className="w-full bg-[#1a1a1a] text-white text-center py-3 px-[15px] text-[15px] flex items-center justify-center flex-wrap">
        <strong className="font-bold mr-[5px]">iTuong</strong> - Đại lý uỷ quyền
        chính thức của Apple Việt Nam (AAR)
      </div>

      <CategorySlider categories={categoriesData} />

      <ProductSection
        icon={faLaptop}
        title="MacBook Air"
        tags={macbookAirTags}
        products={macbookAirProducts}
        viewAllLink="/danh-muc/macbook-air"
        viewAllText="Xem tất cả MacBook Air"
      />

      <PromoBanners banners={midBanners} />

      <ProductSection
        title="MacBook Pro"
        icon={faLaptop}
        tags={macbookProTags}
        products={macbookProProducts}
        viewAllLink="/danh-muc/macbook-pro"
        viewAllText="Xem tất cả MacBook Pro"
      />

      <ProductSection
        title="iMac & Mac Desktop"
        titleIcon="/icons/desktop-icon.svg"
        tags={imacTags}
        products={imacProducts}
        viewAllLink="/danh-muc/imac-mac-desktop"
        viewAllText="Xem tất cả iMac & Mac Desktop"
      />

      <ProductSection
        title="Phụ kiện"
        icon={faLaptop}
        tags={phuKienTags}
        products={phuKienProducts}
        viewAllLink="/danh-muc/phu-kien"
        viewAllText="Xem tất cả Phụ kiện"
      />
    </>
  );
}

export default Home;
