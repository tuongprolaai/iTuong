import { Link } from "react-router";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

function PromoBanners({ banners, loading = false }) {
    if (!banners && !loading) return null;

    return (
        <section className="w-full bg-zinc-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Skeleton loading */}
                    {loading &&
                        Array.from({ length: 3 }).map((_, index) => (
                            <AspectRatio
                                key={index}
                                ratio={16 / 9}
                                className="overflow-hidden rounded-2xl"
                            >
                                <Skeleton className="h-full w-full" />
                            </AspectRatio>
                        ))}

                    {/* Real banners */}
                    {!loading &&
                        banners?.map((banner, index) => (
                            <Link
                                key={index}
                                to={banner.link || "#"}
                                className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                            >
                                <AspectRatio ratio={16 / 9}>
                                    <img
                                        src={banner.image}
                                        alt={banner.alt || `Banner ${index}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </AspectRatio>

                                {/* hover overlay */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default PromoBanners;
