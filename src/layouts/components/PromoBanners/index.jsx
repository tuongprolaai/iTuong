import { Link } from "react-router";
import styles from "./PromoBanners.module.scss";

function PromoBanners({ banners }) {
  if (!banners || banners.length === 0) return null;

  return (
    <section className={styles.promoSection}>
      <div className="container">
        <div className={styles.grid}>
          {banners.map((banner, index) => (
            <Link
              key={index}
              to={banner.link || "#"}
              className={styles.bannerItem}
            >
              <img src={banner.image} alt={`Banner ${index}`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanners;
