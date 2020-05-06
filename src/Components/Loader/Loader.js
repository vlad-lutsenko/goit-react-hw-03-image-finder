import React from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../../utils/styles.module.css";

const LoaderSection = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderSection;
