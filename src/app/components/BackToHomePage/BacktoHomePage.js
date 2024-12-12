import React from "react";
import styles from "./BacktoHomePage.module.css";
import Link from "next/link";

const BacktoHomePage = () => {
  return (
    <div className={styles.container}>
      <Link className={`${styles.homeLink} ${styles.text}`} href="">
        HOME
      </Link>
      <span className={styles.text}>|</span>
      <Link className={`${styles.shopLink} ${styles.text}`} href="">
        SHOP
      </Link>
    </div>
  );
};

export default BacktoHomePage;
