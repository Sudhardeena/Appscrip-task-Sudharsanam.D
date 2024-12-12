import React from "react";
import styles from "./GreyStrip.module.css";
import Image from "next/image";

const GreyStrip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src="/element-4.svg" width={14} height={14} alt="battery-icon" />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
      <div className={`${styles.content} ${styles.hiddenElement}`}>
        <Image src="/element-4.svg" width={14} height={14} alt="battery-icon" />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
      <div className={`${styles.content} ${styles.hiddenElement}`}>
        <Image src="/element-4.svg" width={14} height={14} alt="battery-icon" />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default GreyStrip;
