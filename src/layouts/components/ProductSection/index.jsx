import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../ProductCard";

function ProductSection({
  title,
  icon,
  tags,
  products,
  viewAllLink,
  viewAllText,
}) {
  return (
    <section className="w-full bg-[#ebebeb] pt-[30px] pb-[40px]">
      <div className="container mx-auto">
        <h2 className="text-center text-[24px] font-bold text-[#111111] m-0 mb-[20px] flex items-center justify-center gap-[10px]">
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="text-[24px] text-[#111111]"
            />
          )}
          {title}
        </h2>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-[10px] mb-[25px]">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-white border border-white text-[#555555] px-[16px] py-[6px] rounded-[20px] text-[13px] cursor-pointer transition-all duration-300 ease-in-out hover:border-[#8cc63f] hover:text-[#8cc63f]"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mb-[25px]">
          {products &&
            products.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </div>

        {viewAllLink && (
          <div className="text-center">
            <Link
              to={viewAllLink}
              className="inline-block text-[#007bff] text-[14px] no-underline transition-colors duration-300 ease-in-out hover:text-[#0056b3] hover:underline"
            >
              {viewAllText || `Xem tất cả ${title}`}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
