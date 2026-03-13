import { Filter, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const PRICE_OPTIONS = [
    "Mặc Định",
    "Dưới 10 triệu",
    "10 - 20 triệu",
    "20 - 30 triệu",
    "30 - 40 triệu",
    "Trên 40 triệu",
];

const SORT_OPTIONS = ["Giá tăng dần", "Giá giảm dần"];
const CONDITION_OPTIONS = ["Mới", "Cũ"];

function CollectionFilter({
    displayTitle,
    priceFilter,
    sortOrder,
    conditionFilter,
    onPriceChange,
    onSortChange,
    onConditionChange,
}) {
    return (
        <div className="mt-8 mb-6 space-y-4">
            {/* Title */}
            <h2 className="text-sm font-semibold">
                Danh mục:{" "}
                <span className="capitalize text-foreground">
                    {displayTitle}
                </span>
            </h2>

            <div className="flex flex-col lg:flex-row justify-between gap-4">
                {/* Price filter */}
                <div className="flex flex-wrap gap-2">
                    {PRICE_OPTIONS.map((label) => (
                        <Button
                            key={label}
                            size="sm"
                            variant={
                                priceFilter === label ? "default" : "outline"
                            }
                            onClick={() => onPriceChange(label)}
                            className="h-8 text-xs"
                        >
                            {label}
                        </Button>
                    ))}
                </div>

                {/* Right actions */}
                <div className="flex flex-wrap items-center gap-2">
                    {/* Sort */}
                    <Select value={sortOrder} onValueChange={onSortChange}>
                        <SelectTrigger className="h-8 min-w-[140px] text-xs">
                            <SelectValue placeholder="Sắp xếp theo" />
                        </SelectTrigger>

                        <SelectContent>
                            {SORT_OPTIONS.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Condition */}
                    <Select
                        value={conditionFilter}
                        onValueChange={onConditionChange}
                    >
                        <SelectTrigger className="h-8 min-w-[120px] text-xs">
                            <SelectValue placeholder="Tình trạng" />
                        </SelectTrigger>

                        <SelectContent>
                            {CONDITION_OPTIONS.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Buttons */}
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                        <Filter className="mr-1 h-3.5 w-3.5" />
                        Bộ lọc
                    </Button>

                    <Button variant="outline" size="sm" className="h-8 text-xs">
                        <GitCompare className="mr-1 h-3.5 w-3.5" />
                        So sánh
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CollectionFilter;
