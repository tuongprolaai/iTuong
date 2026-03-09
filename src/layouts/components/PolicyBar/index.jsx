import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotate,
  faThumbsUp,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./PolicyBar.module.scss";

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
    <section className={styles.policyBar}>
      <div className="container">
        <div className={styles.grid}>
          {policies.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className={styles.info}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PolicyBar;
