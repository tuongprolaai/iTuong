import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const badgeStyles = {
    "SẴN HÀNG": "bg-green-500 text-white hover:bg-green-500",
    "BÁN CHẠY": "bg-red-500 text-white hover:bg-red-500",
    MỚI: "bg-blue-500 text-white hover:bg-blue-500",
    "TẠM HẾT": "bg-zinc-400 text-white hover:bg-zinc-400",
};

function ProductCard({ data }) {
    if (!data) return null;

    const { link = "/detail", name, image, specs, price, badge } = data;

    return (
        <Link to={link} className="group block h-full">
            <Card className="relative flex h-full flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {/* Badge */}
                {badge && (
                    <Badge
                        className={`absolute top-2 left-2 px-2 py-0.5 text-[11px] ${badgeStyles[badge]}`}
                    >
                        {badge}
                    </Badge>
                )}

                <CardContent className="flex flex-1 flex-col p-4 text-center">
                    {/* Image */}
                    <AspectRatio ratio={4 / 3} className="mb-4">
                        <div className="flex h-full w-full items-center justify-center overflow-hidden">
                            <img
                                src={image}
                                alt={name}
                                loading="lazy"
                                className="max-h-full max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "/images/product-placeholder.png";
                                }}
                            />
                        </div>
                    </AspectRatio>

                    {/* Name */}
                    <h3 className="min-h-[40px] line-clamp-2 text-sm font-semibold">
                        {name}
                    </h3>

                    {/* Specs */}
                    <p className="mt-1 min-h-[32px] line-clamp-2 text-xs text-muted-foreground">
                        {specs}
                    </p>

                    {/* Price */}
                    <p className="mt-auto pt-3 text-base font-semibold">
                        {price}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}

export default ProductCard;
