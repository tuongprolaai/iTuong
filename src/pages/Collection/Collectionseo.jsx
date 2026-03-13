import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function CollectionSeo({ content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!content) return null;

    return (
        <div className="bg-background p-8 rounded-t-lg border">
            <div
                className={`relative overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-none" : "max-h-[260px]"
                }`}
            >
                <div
                    className="
            text-sm leading-relaxed
            [&_img]:rounded-lg
            [&_img]:mx-auto
            [&_img]:my-6
            [&_img]:max-w-full

            [&_h2]:font-bold
            [&_h2]:text-lg
            [&_h2]:mt-6

            [&_h3]:font-semibold
            [&_h3]:mt-5

            [&_p]:mb-3
          "
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 flex items-end justify-center pb-2 bg-gradient-to-t from-background to-transparent">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsExpanded(true)}
                        >
                            Xem thêm
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </div>
                )}
            </div>

            {isExpanded && (
                <div className="flex justify-center mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsExpanded(false)}
                    >
                        Thu gọn
                        <ChevronUp className="ml-1 h-3 w-3" />
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CollectionSeo;
