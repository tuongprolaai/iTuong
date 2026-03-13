import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductGallery({ images = [] }) {
    const [activeImage, setActiveImage] = useState(0);

    if (!images.length) return null;

    return (
        <div className="flex flex-col gap-4">
            {/* Main image */}
            <Card className="relative flex items-center justify-center p-8 h-[400px]">
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-2"
                    onClick={() =>
                        setActiveImage((p) =>
                            p === 0 ? images.length - 1 : p - 1,
                        )
                    }
                >
                    <ChevronLeft />
                </Button>

                <img
                    src={images[activeImage]}
                    alt=""
                    className="max-h-full object-contain"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-2"
                    onClick={() =>
                        setActiveImage((p) =>
                            p === images.length - 1 ? 0 : p + 1,
                        )
                    }
                >
                    <ChevronRight />
                </Button>
            </Card>

            {/* Thumbnails */}
            <ScrollArea className="w-full">
                <div className="flex gap-2">
                    {images.map((img, i) => (
                        <Button
                            key={i}
                            variant={activeImage === i ? "default" : "outline"}
                            size="icon"
                            className="w-16 h-16 p-1"
                            onClick={() => setActiveImage(i)}
                        >
                            <img src={img} alt="" className="object-contain" />
                        </Button>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}

export default ProductGallery;
