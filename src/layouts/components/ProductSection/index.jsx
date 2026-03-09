import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductSection.module.scss";
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
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
          {title}
        </h2>

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <button key={index} className={styles.tagBtn}>
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {products &&
            products.map((item, index) => (
              <ProductCard key={index} data={item} />
            ))}
        </div>

        {viewAllLink && (
          <div className={styles.viewAll}>
            <Link to={viewAllLink}>{viewAllText || `Xem tất cả ${title}`}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
