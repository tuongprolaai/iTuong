import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import logo1 from "@/assets/logo/logo1.png";
import bct from "@/assets/img/bct.png";

const supportLinks = [
    "Giới thiệu",
    "Hướng dẫn mua hàng",
    "Bán hàng Doanh nghiệp",
    "Mua trả góp",
    "Tin công nghệ",
    "MFix – Trung tâm dịch vụ sửa chữa",
    "Liên hệ",
];

const policyLinks = [
    "Chính sách Bảo Hành & Đổi Trả",
    "Chính sách đặt hàng",
    "Chính sách vận chuyển",
    "Chính sách bảo mật thông tin",
    "Chính sách thanh toán",
    "Gói bảo hành vàng MACONE Care",
    "Các gói bảo hành hỗ trợ doanh nghiệp",
];

const highlightProducts = [
    "MacBook",
    "MacBook Air",
    "MacBook Pro",
    "iMac",
    "Mac Mini",
    "MacBook Pro M4",
    "iMac M4",
    "Mac mini M4",
    "Mfix.vn",
];

function Footer() {
    return (
        <footer className=" w-full border-t bg-background text-sm text-muted-foreground">
            <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-10">
                <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <div className="mb-4 flex items-center">
                            <img
                                src={logo1}
                                alt="MacOne"
                                className="h-[40px] w-auto object-contain"
                            />
                        </div>

                        <p className="mb-2">
                            MACONE là đại lý uỷ quyền chính thức của Apple tại
                            Việt Nam (AAR)
                        </p>

                        <p className="mb-2 font-semibold text-foreground">
                            Công ty cổ phần MACONE
                        </p>

                        <p className="mb-2">Giấy phép ĐKKD số: 0108037559</p>

                        <p className="mb-2">
                            Hotline tư vấn:{" "}
                            <span className="font-semibold text-primary">
                                0936 362 153
                            </span>
                        </p>

                        <p className="mb-2">
                            Khách hàng Doanh nghiệp:{" "}
                            <span className="font-semibold text-primary">
                                0936 368 455
                            </span>
                        </p>

                        <p className="mb-2">
                            Sửa chữa & Bảo hành:{" "}
                            <span className="font-semibold text-primary">
                                0936 363 501
                            </span>
                        </p>

                        <p className="mb-2">
                            Thời gian làm việc:{" "}
                            <span className="font-semibold text-foreground">
                                8h30 – 21h30
                            </span>
                        </p>

                        <p>Email: lienhe@macone.vn</p>

                        <p className="mt-6 mb-3 font-semibold text-foreground">
                            MẠNG XÃ HỘI
                        </p>

                        <div className="flex gap-3">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="hover:text-blue-600"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </Button>

                            <Button
                                variant="secondary"
                                size="icon"
                                className="hover:text-red-600"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </Button>

                            <Button
                                variant="secondary"
                                size="icon"
                                className="hover:text-pink-500"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </Button>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold text-foreground">
                            HỖ TRỢ KHÁCH HÀNG
                        </h3>

                        <ul className="flex flex-col gap-3">
                            {supportLinks.map((text, idx) => (
                                <li key={idx}>
                                    <Link
                                        to="/"
                                        className="transition-colors hover:text-primary"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <img
                            src={bct}
                            alt="Đã thông báo bộ công thương"
                            loading="lazy"
                            className="mt-6 w-[150px]"
                        />
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="mb-5 text-base font-semibold text-foreground">
                            CHÍNH SÁCH
                        </h3>

                        <ul className="flex flex-col gap-3">
                            {policyLinks.map((text, idx) => (
                                <li key={idx}>
                                    <Link
                                        to="/"
                                        className="transition-colors hover:text-primary"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <p className="mb-2 font-semibold text-foreground">
                            Hà Nội:
                        </p>

                        <p className="mb-2">
                            <span className="font-medium text-foreground">
                                Cơ sở 1: 113 Hoàng Cầu
                            </span>
                            <br />
                            SĐT:{" "}
                            <span className="font-semibold text-primary">
                                0342 99 55 66
                            </span>
                        </p>

                        <p className="mb-4">
                            <span className="font-medium text-foreground">
                                Cơ sở 2: 99 Nguyễn Văn Huyên
                            </span>
                            <br />
                            SĐT:{" "}
                            <span className="font-semibold text-primary">
                                0773 220 666
                            </span>
                        </p>

                        <p className="mb-2 font-semibold text-foreground">
                            TP Hồ Chí Minh:
                        </p>

                        <p className="mb-2">
                            <span className="font-medium text-foreground">
                                Cơ sở 3: 186 Võ Văn Tần
                            </span>
                            <br />
                            SĐT:{" "}
                            <span className="font-semibold text-primary">
                                0386 370 444
                            </span>
                        </p>

                        <p>
                            <span className="font-medium text-foreground">
                                Cơ sở 4: 223 Xô Viết Nghệ Tĩnh
                            </span>
                            <br />
                            SĐT:{" "}
                            <span className="font-semibold text-primary">
                                0973 645 650
                            </span>
                        </p>

                        <p className="mt-4 text-xs italic">
                            (Các cơ sở đều có chỗ để xe ô tô)
                        </p>
                    </div>
                </div>

                <Separator />

                {/* Bottom */}
                <div className="pt-8 text-center text-xs">
                    <p className="mb-3 leading-loose">
                        <span className="mr-2 text-muted-foreground">
                            Sản phẩm tiêu biểu:
                        </span>

                        {highlightProducts.map((text, idx, arr) => (
                            <span key={idx}>
                                <Link
                                    to="/"
                                    className="mx-1 font-medium hover:text-primary"
                                >
                                    {text}
                                </Link>

                                {idx < arr.length - 1 && (
                                    <span className="mx-1 text-border">|</span>
                                )}
                            </span>
                        ))}
                    </p>

                    <p className="text-muted-foreground">
                        Copyright © {new Date().getFullYear()} - Bản quyền thuộc
                        về MacOne.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
