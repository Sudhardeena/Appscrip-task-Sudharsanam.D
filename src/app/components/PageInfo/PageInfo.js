import React from "react";
import styles from "./PageInfo.module.css";
import BacktoHomePage from "../BackToHomePage/BacktoHomePage";

const PageInfo = () => {
  return (
    <div className={styles.container}>
      <BacktoHomePage />
      <h1 className={`${styles.text} ${styles.pageInfoTitle}`}>
        DISCOVER OUR PRODUCTS
      </h1>
      <p className={`${styles.text} ${styles.pageInfoDesc}`}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
  );
};

export default PageInfo;
