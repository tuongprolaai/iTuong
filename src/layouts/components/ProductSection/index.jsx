import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import ProductCard from "../ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ProductSection({
    title,
    icon,
    tags,
    products,
    viewAllLink,
    viewAllText,
    loading = false,
}) {
    const [activeTag, setActiveTag] = useState(tags?.[0]);

    return (
        <section className="w-full bg-zinc-50 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="mb-8 flex items-center justify-center gap-3 text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
                    {icon && (
                        <FontAwesomeIcon
                            icon={icon}
                            className="text-2xl text-zinc-900 sm:text-3xl"
                        />
                    )}
                    {title}
                </h2>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                        {tags.map((tag, index) => (
                            <Button
                                key={index}
                                variant={
                                    activeTag === tag ? "default" : "outline"
                                }
                                size="sm"
                                className="rounded-full"
                                onClick={() => setActiveTag(tag)}
                            >
                                {tag}
                            </Button>
                        ))}
                    </div>
                )}

                {/* Product Grid */}
                <div className="mb-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {/* Loading Skeleton */}
                    {loading &&
                        Array.from({ length: 8 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))}

                    {/* Products */}
                    {!loading &&
                        products?.map((item, index) => (
                            <ProductCard key={index} data={item} />
                        ))}
                </div>

                {/* View All */}
                {viewAllLink && (
                    <div className="text-center">
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full px-8 py-3"
                        >
                            <Link
                                to={viewAllLink}
                                className="flex items-center gap-2"
                            >
                                {viewAllText || `Xem tất cả ${title}`}
                                <ArrowRight size={16} />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductSection;
