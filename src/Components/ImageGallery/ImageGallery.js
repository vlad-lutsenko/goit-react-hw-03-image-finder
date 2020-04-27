import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import styles from "../../utils/styles.module.css";

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} url={webformatURL} alt={id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
