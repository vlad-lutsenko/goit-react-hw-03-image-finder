import React, { useEffect } from "react";
import styles from "../../utils/styles.module.css";

const Modal = ({ largeImageURL, closeModal }) => {
  const modalCloseFunc = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    closeModal();
  };

  const escCloseModal = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", escCloseModal);
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  });

  return (
    <div className={styles.Overlay} onClick={modalCloseFunc}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
