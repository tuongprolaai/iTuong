import { Link } from "react-router";
import styles from "./ProductCard.module.scss";

function ProductCard({ data }) {
  if (!data) return null;

  return (
    <Link to={data.link || "#"} className={styles.card}>
      {data.badge && (
        <div
          className={styles.badge}
          style={{ backgroundColor: data.badgeColor || "#ff0000" }}
        >
          {data.badge}
        </div>
      )}

      {data.seal && (
        <div className={styles.seal}>
          <img src={data.seal} alt="Seal" />
        </div>
      )}

      <div className={styles.imageBox}>
        <img src={data.image} alt={data.name} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{data.name}</h3>
        <p className={styles.specs}>{data.specs}</p>
        <p className={styles.price}>{data.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
