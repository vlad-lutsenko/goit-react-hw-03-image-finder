import React from "react";
import styles from "../../utils/styles.module.css";

const Button = ({ pageChanger }) => {
  return (
    <button type="button" className={styles.Button} onClick={pageChanger}>
      Load more
    </button>
  );
};

export default Button;
