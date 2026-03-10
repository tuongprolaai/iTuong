import { Link } from "react-router";

function PromoBanners({ banners }) {
  if (!banners || banners.length === 0) return null;

  return (
    <section className="w-full bg-[#ebebeb] pt-[10px] pb-[40px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {banners.map((banner, index) => (
            <Link
              key={index}
              to={banner.link || "#"}
              className="block rounded-[12px] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-[4px] hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)]"
            >
              <img
                src={banner.image}
                alt={`Banner ${index}`}
                className="w-full h-auto block object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanners;
