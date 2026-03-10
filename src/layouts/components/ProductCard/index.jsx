import { Link } from "react-router";

function ProductCard({ data }) {
  if (!data) return null;

  const {
    link = "/detail",
    name,
    image,
    specs,
    price,
    badge,
    badgeColor = "#ff0000",
    seal,
  } = data;

  return (
    <Link
      to={link}
      className="relative flex flex-col bg-white rounded-[8px] pt-[30px] px-[15px] pb-[15px] no-underline text-[#333] transition-all duration-300 ease-in-out hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[2px]"
    >
      {/* Badge */}
      {badge && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold px-[12px] py-[4px] rounded-b-[4px] z-[2] whitespace-nowrap"
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </div>
      )}

      {/* Seal */}
      {seal && (
        <div className="absolute top-[10px] left-[10px] w-[45px] h-[45px] z-[2]">
          <img src={seal} alt="seal" className="w-full h-full object-contain" />
        </div>
      )}

      {/* Image */}
      <div className="w-full h-[180px] flex items-center justify-center mb-[15px]">
        <img
          src={image}
          alt={name}
          className="max-w-[90%] max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center flex flex-col flex-1">
        <h3 className="text-[15px] font-bold mb-[5px] text-[#111] line-clamp-2">
          {name}
        </h3>

        <p className="text-[12px] text-[#666] mb-[15px] leading-[1.4] flex-1 line-clamp-2">
          {specs}
        </p>

        <p className="text-[16px] font-bold text-[#ff0000]">{price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
