import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import logo from "@/assets/logo/logo.png";
import bct from "@/assets/img/bct.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <img src={logo} alt="MacOne" className={styles.logo} />
          </div>
          <p>
            MACONE là đại lý uỷ quyền chính thức của Apple tại Việt Nam (AAR)
          </p>
          <p className={styles.bold}>Công ty cổ phần MACONE</p>
          <p>Giấy phép ĐKKD số: 0108037559</p>
          <p>
            Hotline tư vấn:{" "}
            <span className={styles.textBlue}>0936 362 153</span>
          </p>
          <p>
            Khách hàng Doanh nghiệp:{" "}
            <span className={styles.textBlue}>0936 368 455</span>
          </p>
          <p>
            Sửa chữa & Bảo hành:{" "}
            <span className={styles.textBlue}>0936 363 501</span>
          </p>
          <p>
            Thời gian làm việc:{" "}
            <span className={styles.bold}>8h30 – 21h30</span>
          </p>
          <p>Email: lienhe@macone.vn</p>

          <p className={styles.socialHeading}>MẠNG XÃ HỘI</p>
          <div className={styles.socialIcons}>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faYoutube} color="#ff0000" />
            </div>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faInstagram} color="#f56040" />
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/gioi-thieu">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
            </li>
            <li>
              <Link to="/ban-hang-doanh-nghiep">Bán hàng Doanh nghiệp</Link>
            </li>
            <li>
              <Link to="/mua-tra-gop">Mua trả góp</Link>
            </li>
            <li>
              <Link to="/tin-cong-nghe">Tin công nghệ</Link>
            </li>
            <li>
              <Link to="/mfix">MFix – Trung tâm dịch vụ sửa chữa</Link>
            </li>
            <li>
              <Link to="/lien-he">Liên hệ</Link>
            </li>
          </ul>
          <img
            src={bct}
            alt="Đã thông báo bộ công thương"
            className={styles.bctLogo}
          />
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>CHÍNH SÁCH</h3>
          <ul className={styles.linkList}>
            <li>
              <Link to="/chinh-sach-bao-hanh">
                Chính sách Bảo Hành & Đổi Trả
              </Link>
            </li>
            <li>
              <Link to="/chinh-sach-dat-hang">Chính sách đặt hàng</Link>
            </li>
            <li>
              <Link to="/chinh-sach-van-chuyen">Chính sách vận chuyển</Link>
            </li>
            <li>
              <Link to="/chinh-sach-bao-mat">Chính sách bảo mật thông tin</Link>
            </li>
            <li>
              <Link to="/chinh-sach-thanh-toan">Chính sách thanh toán</Link>
            </li>
            <li>
              <Link to="/goi-bao-hanh-vang">Gói bảo hành vàng MACONE Care</Link>
            </li>
            <li>
              <Link to="/bao-hanh-doanh-nghiep">
                Các gói bảo hành hỗ trợ doanh nghiệp
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <p className={styles.bold}>Hà Nội:</p>
          <p>
            <span className={styles.bold}>
              Cơ sở 1: 113 Hoàng Cầu, P. Đống Đa, HN.
            </span>{" "}
            SĐT: <span className={styles.textBlue}>0342 99 55 66</span>
          </p>
          <p>
            <span className={styles.bold}>
              Cơ sở 2: 99 Nguyễn Văn Huyên, P. Nghĩa Đô, HN.
            </span>{" "}
            SĐT: <span className={styles.textBlue}>0773 220 666</span>
          </p>
          <p className={styles.bold} style={{ marginTop: "16px" }}>
            TP Hồ Chí Minh:
          </p>
          <p>
            <span className={styles.bold}>
              Cơ sở 3: 186 Võ Văn Tần, P. Bản Cờ, TP HCM.
            </span>{" "}
            SĐT: <span className={styles.textBlue}>0386 370 444</span>
          </p>
          <p>
            <span className={styles.bold}>
              Cơ sở 4: 223 Xô Viết Nghệ Tĩnh, P. Gia Định, TP HCM.
            </span>{" "}
            SĐT: <span className={styles.textBlue}>0973 645 650</span>
          </p>
          <p className={styles.italic}>(Các cơ sở đều có chỗ để xe ô tô)</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <p className={styles.products}>
            Sản phẩm tiêu biểu: <Link to="/macbook">MacBook</Link> |{" "}
            <Link to="/macbook-air">MacBook Air</Link> |{" "}
            <Link to="/macbook-pro">MacBook Pro</Link> |{" "}
            <Link to="/imac">iMac</Link> | <Link to="/mac-mini">Mac Mini</Link>{" "}
            | <Link to="/macbook-pro-m4">MacBook Pro M4</Link> |{" "}
            <Link to="/imac-m4">iMac M4</Link> |{" "}
            <Link to="/mac-mini-m4">Mac mini M4</Link> |{" "}
            <Link to="/mfix">Mfix.vn</Link>
          </p>
          <p className={styles.copyright}>
            Copyright © 2026 - Bản quyền thuộc về MacOne.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
