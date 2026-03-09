import Navigation from "../Navigation";
import styles from "./Header.module.scss";
import logo from "@/assets/logo/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={styles.header}>
      <SearchModal
        isOpen={isSearchOpen}
        onRequestClose={() => setIsSearchOpen(false)}
      />
      <div className={styles.leftSection}>
        <img src={logo} alt="MacOne Logo" className={styles.logo} />
      </div>

      <div className={styles.centerSection}>
        <Navigation />
      </div>

      <div className={styles.rightSection}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          title="Tìm kiếm"
          className={styles.icon}
          onClick={() => setIsSearchOpen(true)}
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          title="Giỏ hàng"
          className={styles.icon}
        />
      </div>
    </header>
  );
}

export default Header;
