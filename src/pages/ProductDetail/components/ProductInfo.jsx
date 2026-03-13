import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, Truck } from "lucide-react";

const COLORS = ["Silver", "Space Gray", "Black"];
const RAM_OPTIONS = ["24GB", "48GB"];
const STORAGE_OPTIONS = ["512GB", "1TB", "2TB"];

function ProductInfo() {
    const [color, setColor] = useState(COLORS[0]);
    const [ram, setRam] = useState(RAM_OPTIONS[0]);
    const [storage, setStorage] = useState(STORAGE_OPTIONS[1]);
    const [quantity, setQuantity] = useState(1);

    return (
        <Card className="p-5 flex flex-col gap-4">
            {/* Title */}
            <div>
                <h1 className="text-lg font-semibold">
                    MacBook Pro M4 14 inch
                </h1>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-500" />
                        ))}
                    </div>
                    <span>(12 đánh giá)</span>
                </div>

                <div className="mt-2 flex items-center gap-3">
                    <p className="text-xl font-bold text-red-600">
                        55.590.000đ
                    </p>

                    <span className="text-sm line-through text-muted-foreground">
                        59.990.000đ
                    </span>
                </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-[90px_1fr] gap-y-3 items-center text-sm">
                {/* Color */}
                <span className="text-muted-foreground">Màu</span>

                <div className="flex gap-2 flex-wrap">
                    {COLORS.map((c) => (
                        <Button
                            key={c}
                            size="sm"
                            variant={color === c ? "default" : "outline"}
                            onClick={() => setColor(c)}
                        >
                            {c}
                        </Button>
                    ))}
                </div>

                {/* RAM */}
                <span className="text-muted-foreground">RAM</span>

                <div className="flex gap-2">
                    {RAM_OPTIONS.map((option) => (
                        <Button
                            key={option}
                            size="sm"
                            variant={ram === option ? "default" : "outline"}
                            onClick={() => setRam(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </div>

                {/* Storage */}
                <span className="text-muted-foreground">SSD</span>

                <div className="flex gap-2">
                    {STORAGE_OPTIONS.map((option) => (
                        <Button
                            key={option}
                            size="sm"
                            variant={storage === option ? "default" : "outline"}
                            onClick={() => setStorage(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </div>

                {/* Quantity */}
                <span className="text-muted-foreground">Số lượng</span>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
                    >
                        -
                    </Button>

                    <span className="w-6 text-center">{quantity}</span>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity((q) => q + 1)}
                    >
                        +
                    </Button>

                    <span className="ml-4 text-green-600 font-medium">
                        Còn hàng
                    </span>
                </div>
            </div>

            {/* Shipping */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                Giao hàng toàn quốc
            </div>

            {/* Promotion */}
            <div className="bg-muted rounded-md p-3 text-sm">
                <p className="font-medium mb-1">Khuyến mãi</p>

                <ul className="list-disc ml-4 text-muted-foreground">
                    <li>Tặng túi chống sốc MacBook</li>
                    <li>Giảm 500.000đ khi thanh toán Momo</li>
                </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
                <Button size="lg" className="w-full">
                    Mua ngay
                </Button>

                <Button variant="secondary" className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Thêm vào giỏ
                </Button>
            </div>
        </Card>
    );
}

export default ProductInfo;
