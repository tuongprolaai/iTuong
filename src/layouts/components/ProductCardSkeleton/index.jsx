import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function ProductCardSkeleton() {
    return (
        <Card className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col p-4">
                {/* Image skeleton */}
                <AspectRatio ratio={4 / 3} className="mb-4">
                    <Skeleton className="h-full w-full rounded-md" />
                </AspectRatio>

                {/* Title */}
                <Skeleton className="mb-2 h-4 w-[90%]" />

                {/* Specs */}
                <Skeleton className="mb-1 h-3 w-[70%]" />
                <Skeleton className="mb-4 h-3 w-[50%]" />

                {/* Price */}
                <Skeleton className="mt-auto h-5 w-[40%]" />
            </CardContent>
        </Card>
    );
}

export default ProductCardSkeleton;
