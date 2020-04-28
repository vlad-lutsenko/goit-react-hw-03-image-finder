import React, { useState } from "react";
import styles from "../../../utils/styles.module.css";
import Modal from "../../Modal/Modal";

const ImageGalleryItem = ({ url, alt, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles["ImageGalleryItem-image"]}
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </li>
  );
};

export default ImageGalleryItem;
