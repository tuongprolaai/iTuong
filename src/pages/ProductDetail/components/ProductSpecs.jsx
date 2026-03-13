import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProductSpecs({ specs }) {
    const [expanded, setExpanded] = useState(false);

    const visibleSpecs = expanded ? specs : specs.slice(0, 5);

    return (
        <div className="border rounded-lg mt-8">
            <div className="p-4 border-b font-semibold">Thông số kỹ thuật</div>

            <table className="w-full text-sm">
                <tbody>
                    {visibleSpecs.map((spec, i) => (
                        <tr key={i} className="border-b">
                            <td className="p-3 bg-muted w-1/3">{spec.label}</td>
                            <td className="p-3">{spec.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center p-3">
                <Button variant="ghost" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <>
                            Thu gọn <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                    ) : (
                        <>
                            Xem thêm <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}

export default ProductSpecs;
