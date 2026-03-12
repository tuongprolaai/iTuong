import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
    faRotate,
    faThumbsUp,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import { Card, CardContent } from "@/components/ui/card";

const policies = [
    {
        icon: faTruck,
        title: "GIAO HÀNG TẬN NƠI",
        desc: "Miễn phí giao hàng nội thành",
    },
    {
        icon: faRotate,
        title: "ĐỔI TRẢ DỄ DÀNG",
        desc: "Miễn phí đổi trong 10 ngày",
    },
    {
        icon: faThumbsUp,
        title: "HÀNG CHÍNH HÃNG",
        desc: "Cam kết hàng chính hãng 100%",
    },
    {
        icon: faDollarSign,
        title: "NHẬN HÀNG TRẢ TIỀN",
        desc: "Tiền mặt, quẹt thẻ, chuyển khoản",
    },
];

function PolicyBar() {
    return (
        <section className="w-full border-t border-border bg-background py-8">
            <div className="mx-auto max-w-7xl px-4 lg:px-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {policies.map((item, index) => (
                        <Card
                            key={index}
                            className="group border-none bg-transparent shadow-none transition-colors hover:bg-muted/50"
                        >
                            <CardContent className="flex items-center gap-4 p-4">
                                <div className="flex w-12 shrink-0 items-center justify-center text-3xl text-primary transition-transform group-hover:scale-105">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>

                                <div>
                                    <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide text-foreground group-hover:text-primary">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicyBar;
