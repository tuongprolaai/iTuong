import { useState, useMemo } from "react";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categorySeo } from "@/data/categoryContent.js";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import {
    faHouse,
    faFilter,
    faPlus,
    faChevronDown,
    faChevronUp,
    faLaptop,
} from "@fortawesome/free-solid-svg-icons";

import macneo from "../../assets/img/macneo.png";

import CategorySlider from "@/layouts/components/CategorySlider";
import ProductCard from "@/layouts/components/ProductCard";

const subCategories = [
    { title: "MacBook Neo", image: macneo, link: "/macbook-neo" },
    { title: "MacBook Air", image: macneo, link: "/macbook-air-moi-cu" },
    { title: "MacBook Pro", image: macneo, link: "/macbook-pro-moi-cu" },
];

const mainProducts = [
    {
        id: 1,
        name: "MacBook Air 2024",
        specs: "Apple M3 16GB 256GB",
        price: "20.300.000đ",
        image: macneo,
        condition: "used",
        link: "/detail",
    },
    {
        id: 2,
        name: "MacBook Neo 2026",
        specs: "Apple A18 PRO 8GB 256GB",
        price: "16.290.000đ",
        image: macneo,
        condition: "new",
        link: "/detail",
    },
    {
        id: 3,
        name: "MacBook Air 2026",
        specs: "Apple M5 16GB 512GB",
        price: "29.690.000đ",
        image: macneo,
        condition: "new",
        link: "/detail",
    },
    {
        id: 4,
        name: "MacBook Pro M4",
        specs: "Apple M4 16GB 512GB",
        price: "42.500.000đ",
        image: macneo,
        condition: "used",
        link: "/detail",
    },
];

function Collection() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const { slug } = useParams();

    // Detect category cha
    const getCategoryKey = (slug) => {
        if (!slug) return null;

        if (slug.includes("macbook")) return "macbook";
        if (slug.includes("iphone")) return "iphone";
        if (slug.includes("ipad")) return "ipad";

        return null;
    };

    const categoryKey = getCategoryKey(slug);

    const seoContent = categorySeo[categoryKey] || "";

    const displayTitle = slug ? slug.replace(/-/g, " ") : "MacBook";

    const [isExpanded, setIsExpanded] = useState(false);
    const [priceFilter, setPriceFilter] = useState("Mặc Định");
    const [conditionFilter, setConditionFilter] = useState("Tình trạng");
    const [sortOrder, setSortOrder] = useState("Sắp xếp theo");

    const parsePrice = (priceStr) => Number(priceStr.replace(/\D/g, ""));

    const filteredProducts = useMemo(() => {
        let result = [...mainProducts];

        // filter giá
        if (priceFilter !== "Mặc Định") {
            result = result.filter((p) => {
                const price = parsePrice(p.price);

                if (priceFilter === "Dưới 10 triệu") return price < 10000000;
                if (priceFilter === "10 - 20 triệu")
                    return price >= 10000000 && price <= 20000000;
                if (priceFilter === "20 - 30 triệu")
                    return price > 20000000 && price <= 30000000;
                if (priceFilter === "30 - 40 triệu")
                    return price > 30000000 && price <= 40000000;
                if (priceFilter === "Trên 40 triệu") return price > 40000000;

                return true;
            });
        }

        // filter tình trạng
        if (conditionFilter === "Mới") {
            result = result.filter((p) => p.condition === "new");
        } else if (conditionFilter === "Cũ") {
            result = result.filter((p) => p.condition === "used");
        }

        // sort
        if (sortOrder === "Giá tăng dần") {
            result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        } else if (sortOrder === "Giá giảm dần") {
            result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        }

        return result;
    }, [priceFilter, conditionFilter, sortOrder]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );
    return (
        <div className="w-full bg-[#ebebeb] min-h-screen pt-[15px] text-[#333]">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <Breadcrumb className="mb-[30px]">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link
                                    to="/"
                                    className="flex items-center gap-1"
                                >
                                    <FontAwesomeIcon icon={faHouse} />
                                    Trang chủ
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize">
                                {displayTitle}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <CategorySlider categories={subCategories} />

                {/* Filter */}
                <div className="mt-8 mb-[20px]">
                    <h2 className="text-[14px] font-bold mb-[15px]">
                        Danh mục:{" "}
                        <span className="capitalize">{displayTitle}</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div className="flex flex-wrap gap-[8px]">
                            {[
                                "Mặc Định",
                                "Dưới 10 triệu",
                                "10 - 20 triệu",
                                "20 - 30 triệu",
                                "30 - 40 triệu",
                                "Trên 40 triệu",
                            ].map((label) => (
                                <button
                                    key={label}
                                    onClick={() => setPriceFilter(label)}
                                    className={`h-[32px] px-3 rounded text-[13px] shadow-sm ${
                                        priceFilter === label
                                            ? "bg-[#8cc63f] text-white"
                                            : "bg-white"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faLaptop}
                                        className="mr-1"
                                    />
                                    {label}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-[8px]">
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="h-[32px] px-3 bg-white rounded text-[13px]"
                            >
                                <option>Sắp xếp theo</option>
                                <option>Giá tăng dần</option>
                                <option>Giá giảm dần</option>
                            </select>

                            <select
                                value={conditionFilter}
                                onChange={(e) =>
                                    setConditionFilter(e.target.value)
                                }
                                className="h-[32px] px-3 bg-white rounded text-[13px]"
                            >
                                <option>Tình trạng</option>
                                <option>Mới</option>
                                <option>Cũ</option>
                            </select>

                            <button className="h-[32px] px-3 bg-white rounded text-[13px] shadow-sm">
                                <FontAwesomeIcon icon={faFilter} /> Bộ lọc
                            </button>

                            <button className="h-[32px] px-3 bg-white rounded text-[13px] shadow-sm">
                                <FontAwesomeIcon icon={faPlus} /> So sánh
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product list */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mb-[40px]">
                    {paginatedProducts.length > 0 ? (
                        paginatedProducts.map((item) => (
                            <ProductCard key={item.id} data={item} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-500">
                            Không có sản phẩm phù hợp
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mb-[60px]">
                    <Pagination>
                        <PaginationContent>
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage((p) => p - 1);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                    />
                                </PaginationItem>
                            )}

                            {Array.from({ length: totalPages }, (_, i) => (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === i + 1}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(i + 1);
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {currentPage < totalPages && (
                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage((p) => p + 1);
                                        }}
                                    />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* SEO Content */}
                {seoContent && (
                    <div className="bg-white p-8 rounded-t-lg">
                        <div
                            className={`relative overflow-hidden ${
                                isExpanded ? "h-auto" : "h-[260px]"
                            }`}
                        >
                            <div
                                className="
                text-[14px]
                leading-relaxed
                [&_img]:rounded-lg
                [&_img]:mx-auto
                [&_img]:my-6
                [&_h3]:font-bold
                [&_h3]:mt-6
                "
                                dangerouslySetInnerHTML={{ __html: seoContent }}
                            />

                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-2">
                                    <button
                                        onClick={() => setIsExpanded(true)}
                                        className="px-6 py-2 border rounded bg-white text-[14px]"
                                    >
                                        Xem thêm{" "}
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </button>
                                </div>
                            )}
                        </div>

                        {isExpanded && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="px-6 py-2 border rounded bg-white text-[14px]"
                                >
                                    Thu gọn{" "}
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collection;
