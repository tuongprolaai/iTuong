import { useState, useMemo, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { categorySeo } from "@/data/categoryContent";

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

import CategorySlider from "@/layouts/components/CategorySlider";
import ProductCard from "@/layouts/components/ProductCard";
import CollectionFilter from "./Collectionfilter";
import CollectionSeo from "./Collectionseo";

import macneo from "@/assets/img/macneo.png";

/* ---------------- DATA ---------------- */

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
        name: "MacBook Air 2024",
        specs: "Apple M3 16GB 256GB",
        price: "20.300.000đ",
        image: macneo,
        condition: "used",
        link: "/detail",
    },
    {
        id: 5,
        name: "MacBook Neo 2026",
        specs: "Apple A18 PRO 8GB 256GB",
        price: "16.290.000đ",
        image: macneo,
        condition: "new",
        link: "/detail",
    },
    {
        id: 6,
        name: "MacBook Air 2026",
        specs: "Apple M5 16GB 512GB",
        price: "29.690.000đ",
        image: macneo,
        condition: "new",
        link: "/detail",
    },
];

/* ---------------- HELPERS ---------------- */

const ITEMS_PER_PAGE = 8;

const parsePrice = (priceStr) => Number(priceStr.replace(/\D/g, ""));

const getCategoryKey = (slug) => {
    if (!slug) return null;
    if (slug.includes("macbook")) return "macbook";
    if (slug.includes("iphone")) return "iphone";
    if (slug.includes("ipad")) return "ipad";
    return null;
};

/* ---------------- COMPONENT ---------------- */

function Collection() {
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const categoryKey = getCategoryKey(slug);
    const seoContent = categorySeo[categoryKey] || "";
    const displayTitle = slug
        ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
        : "MacBook";

    /* -------- state từ URL -------- */

    const [currentPage, setCurrentPage] = useState(
        Number(searchParams.get("page")) || 1,
    );

    const [priceFilter, setPriceFilter] = useState(
        searchParams.get("price") || "Mặc Định",
    );

    const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "");

    const [conditionFilter, setConditionFilter] = useState(
        searchParams.get("condition") || "",
    );

    /* -------- update URL -------- */

    useEffect(() => {
        const params = {};

        if (currentPage > 1) params.page = currentPage;
        if (priceFilter !== "Mặc Định") params.price = priceFilter;
        if (sortOrder) params.sort = sortOrder;
        if (conditionFilter) params.condition = conditionFilter;

        setSearchParams(params);
    }, [currentPage, priceFilter, sortOrder, conditionFilter]);

    /* -------- handlers -------- */

    const handlePriceChange = (val) => {
        setPriceFilter(val);
        setCurrentPage(1);
    };

    const handleSortChange = (val) => {
        setSortOrder(val);
        setCurrentPage(1);
    };

    const handleConditionChange = (val) => {
        setConditionFilter(val);
        setCurrentPage(1);
    };

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /* -------- filter logic -------- */
    const filteredProducts = useMemo(() => {
        let result = [...mainProducts];

        if (priceFilter !== "Mặc Định") {
            result = result.filter((p) => {
                const price = parsePrice(p.price);

                if (priceFilter === "Dưới 10 triệu") return price < 10000000;

                if (priceFilter === "10 - 20 triệu")
                    return price >= 10000000 && price < 20000000;

                if (priceFilter === "20 - 30 triệu")
                    return price >= 20000000 && price < 30000000;

                if (priceFilter === "30 - 40 triệu")
                    return price >= 30000000 && price < 40000000;

                if (priceFilter === "Trên 40 triệu") return price >= 40000000;

                return true;
            });
        }

        if (conditionFilter === "Mới")
            result = result.filter((p) => p.condition === "new");

        if (conditionFilter === "Cũ")
            result = result.filter((p) => p.condition === "used");

        if (sortOrder === "Giá tăng dần")
            result = [...result].sort(
                (a, b) => parsePrice(a.price) - parsePrice(b.price),
            );

        if (sortOrder === "Giá giảm dần")
            result = [...result].sort(
                (a, b) => parsePrice(b.price) - parsePrice(a.price),
            );

        return result;
    }, [priceFilter, conditionFilter, sortOrder]);

    /* -------- pagination -------- */

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    return (
        <div className="w-full bg-muted/30 min-h-screen pt-4">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <Breadcrumb className="mb-6">
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

                {/* Slider */}
                <CategorySlider categories={subCategories} />

                {/* Filter */}
                <CollectionFilter
                    displayTitle={displayTitle}
                    priceFilter={priceFilter}
                    sortOrder={sortOrder}
                    conditionFilter={conditionFilter}
                    onPriceChange={handlePriceChange}
                    onSortChange={handleSortChange}
                    onConditionChange={handleConditionChange}
                />

                {/* Products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
                    {paginatedProducts.length ? (
                        paginatedProducts.map((item) => (
                            <ProductCard key={item.id} data={item} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-muted-foreground">
                            Không có sản phẩm phù hợp
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages >= 1 && (
                    <div className="flex justify-center mb-14">
                        <Pagination>
                            <PaginationContent>
                                {currentPage > 1 && (
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() =>
                                                changePage(currentPage - 1)
                                            }
                                        />
                                    </PaginationItem>
                                )}

                                {Array.from({ length: totalPages }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            isActive={currentPage === i + 1}
                                            onClick={() => changePage(i + 1)}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                {currentPage < totalPages && (
                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() =>
                                                changePage(currentPage + 1)
                                            }
                                        />
                                    </PaginationItem>
                                )}
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}

                {/* SEO */}
                <CollectionSeo content={seoContent} />
            </div>
        </div>
    );
}

export default Collection;
