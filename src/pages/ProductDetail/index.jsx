import { Link } from "react-router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecs from "./components/ProductSpecs";
import RelatedAccessories from "./components/RelatedAccessories";

import macneo from "@/assets/img/macneo.png";
import ProductComments from "./components/ProductComments";

function ProductDetail() {
    const images = [macneo, macneo, macneo, macneo];

    const specs = [
        { label: "CPU", value: "Apple M4 Pro 12-Core" },
        { label: "RAM", value: "24GB" },
        { label: "Storage", value: "1TB SSD" },
        { label: "GPU", value: "16-core GPU" },
        { label: "Display", value: "Liquid Retina XDR 14 inch" },
        { label: "Camera", value: "12MP Center Stage" },
    ];

    return (
        <div className="container mx-auto py-6">
            {/* Breadcrumb (shadcn) */}
            <Breadcrumb className="mb-6">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">Trang chủ</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/macbook">MacBook</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>MacBook Pro M4</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                    <ProductGallery images={images} />
                </div>

                <div className="lg:col-span-7">
                    <ProductInfo />
                </div>
            </div>

            <ProductSpecs specs={specs} />
            <ProductComments />
            <RelatedAccessories />
        </div>
    );
}

export default ProductDetail;
