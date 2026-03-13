import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const COMMENTS = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        rating: 5,
        date: "12/03/2026",
        content:
            "Máy chạy cực kỳ mượt, pin rất trâu. Build quality của Apple thì khỏi bàn. Mình dùng lập trình + design đều rất ổn. Màn hình đẹp và loa rất tốt.",
    },
    {
        id: 2,
        name: "Trần Minh",
        rating: 4,
        date: "10/03/2026",
        content:
            "Hiệu năng mạnh, máy mát. Tuy nhiên giá hơi cao so với nhu cầu phổ thông. Nhưng nếu làm việc chuyên nghiệp thì rất đáng.",
    },
    {
        id: 3,
        name: "Lê Hoàng",
        rating: 5,
        date: "08/03/2026",
        content: "Thiết kế đẹp, màn hình cực kỳ sắc nét. Rất thích.",
    },
    {
        id: 4,
        name: "Phạm Tuấn",
        rating: 4,
        date: "05/03/2026",
        content:
            "Dùng cho lập trình rất ổn. Pin tốt, bàn phím gõ sướng. Nhưng hơi nặng khi mang theo.",
    },
];

function ProductComments() {
    const [visible, setVisible] = useState(3);
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [expanded, setExpanded] = useState({});

    const average =
        COMMENTS.reduce((sum, c) => sum + c.rating, 0) / COMMENTS.length;

    const toggleExpand = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Card className="p-6 mt-10 space-y-8">
            {/* TITLE */}
            <h2 className="text-lg font-semibold">
                Đánh giá sản phẩm ({COMMENTS.length})
            </h2>

            {/* SUMMARY */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                    <p className="text-4xl font-bold">{average.toFixed(1)}</p>

                    <div className="flex flex-col gap-1">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-yellow-500"
                                />
                            ))}
                        </div>

                        <span className="text-sm text-muted-foreground">
                            {COMMENTS.length} đánh giá
                        </span>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    {[5, 4, 3, 2, 1].map((star) => {
                        const count = COMMENTS.filter(
                            (c) => c.rating === star,
                        ).length;
                        const percent = (count / COMMENTS.length) * 100;

                        return (
                            <div key={star} className="flex items-center gap-2">
                                <span className="w-6">{star}⭐</span>
                                <Progress
                                    value={percent}
                                    className="flex-1 h-2"
                                />
                                <span className="w-8 text-muted-foreground">
                                    {count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* WRITE COMMENT */}

            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <span className="text-sm">Đánh giá của bạn:</span>

                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                                key={s}
                                onClick={() => setRating(s)}
                                className={`h-5 w-5 cursor-pointer ${
                                    s <= rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <Textarea
                    placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button>Gửi đánh giá</Button>
            </div>

            {/* COMMENT LIST */}

            <div className="space-y-6">
                {COMMENTS.slice(0, visible).map((c) => {
                    const isLong = c.content.length > 120;
                    const showFull = expanded[c.id];

                    return (
                        <div key={c.id} className="flex gap-3">
                            <Avatar>
                                <AvatarFallback>
                                    {c.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">
                                        {c.name}
                                    </span>

                                    <span className="text-muted-foreground">
                                        {c.date}
                                    </span>
                                </div>

                                <div className="flex text-yellow-500 mt-1">
                                    {[...Array(c.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-500"
                                        />
                                    ))}
                                </div>

                                <p className="text-sm mt-2 text-muted-foreground">
                                    {isLong && !showFull
                                        ? c.content.slice(0, 120) + "..."
                                        : c.content}
                                </p>

                                {isLong && (
                                    <button
                                        className="text-xs text-primary mt-1"
                                        onClick={() => toggleExpand(c.id)}
                                    >
                                        {showFull ? "Thu gọn" : "Xem thêm"}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* LOAD MORE */}

            {visible < COMMENTS.length && (
                <div className="flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setVisible((v) => v + 3)}
                    >
                        Xem thêm đánh giá
                    </Button>
                </div>
            )}
        </Card>
    );
}

export default ProductComments;
