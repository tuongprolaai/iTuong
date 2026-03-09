import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchModal.module.scss";

Modal.setAppElement("#root");

function SearchModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      closeTimeoutMS={300}
    >
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Nhập từ khoá..."
          className={styles.searchInput}
          autoFocus
        />
        <button className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </Modal>
  );
}

export default SearchModal;
