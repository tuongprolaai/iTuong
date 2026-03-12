import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const POPULAR_KEYWORDS = [
    "MacBook Pro M3",
    "iPhone 15 Pro Max",
    "iPad Air 6",
    "Apple Watch Ultra 2",
];

const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "MacBook Pro 14 inch M3 8CPU 10GPU 8GB 512GB",
        price: "39.990.000đ",
        image: "https://placehold.co/60x60",
    },
    {
        id: 2,
        name: "MacBook Air 15 inch M3 8CPU 10GPU 8GB 256GB",
        price: "32.990.000đ",
        image: "https://placehold.co/60x60",
    },
];

export default function SearchModal({ isOpen, onRequestClose }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            onRequestClose();
            setSearchQuery("");
            navigate(`/search?${new URLSearchParams({ q: searchQuery })}`);
        }
    };

    return (
        <Sheet
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    onRequestClose();
                    setSearchQuery("");
                }
            }}
        >
            <SheetContent
                side="top"
                className="
                    w-full border-b border-border
                    bg-white/95 backdrop-blur-md
                    p-6 sm:p-8
                    dark:bg-zinc-950/95

                    data-[state=open]:animate-in
                    data-[state=closed]:animate-out
                    data-[state=open]:slide-in-from-top
                    data-[state=closed]:slide-out-to-top
                    duration-300
                    "
            >
                <SheetTitle className="sr-only">Tìm kiếm</SheetTitle>

                <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6">
                    <form
                        onSubmit={handleSearchSubmit}
                        className="relative flex items-center"
                    >
                        <Input
                            type="text"
                            placeholder="Bạn đang tìm kiếm sản phẩm gì?..."
                            className="h-14 w-full bg-muted/50 pl-5 pr-14 text-[15px] text-foreground shadow-inner focus-visible:ring-primary/50 dark:bg-zinc-800/50 dark:text-white"
                            autoFocus
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 text-muted-foreground hover:bg-transparent hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                        >
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="text-lg"
                            />
                        </Button>
                    </form>

                    <Separator />

                    <div className="text-left">
                        {!debouncedQuery ? (
                            <div>
                                <h3 className="mb-4 text-sm font-semibold text-foreground">
                                    Tìm kiếm phổ biến
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {POPULAR_KEYWORDS.map((keyword, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="secondary"
                                            className="cursor-pointer px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                                            onClick={() =>
                                                setSearchQuery(keyword)
                                            }
                                        >
                                            {keyword}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
                                    Sản phẩm gợi ý cho{" "}
                                    <span className="font-bold text-foreground">
                                        "{debouncedQuery}"
                                    </span>
                                </h3>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {MOCK_PRODUCTS.map((product) => (
                                        <div
                                            key={product.id}
                                            className="group flex cursor-pointer items-center gap-4 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:bg-zinc-900/50"
                                            onClick={() => {
                                                onRequestClose();
                                                setSearchQuery("");
                                                navigate(
                                                    `/product/${product.id}`,
                                                );
                                            }}
                                        >
                                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-white p-1">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="line-clamp-2 text-sm font-medium leading-tight">
                                                    {product.name}
                                                </span>
                                                <span className="mt-1.5 text-sm font-bold text-primary">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    variant="link"
                                    onClick={handleSearchSubmit}
                                    className="mt-6 h-auto p-0 text-[15px] font-medium text-primary"
                                >
                                    Xem tất cả kết quả{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2"
                                    />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
