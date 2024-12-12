import React from "react";
import styles from "./GreyStrip.module.css";
import Image from "next/image";

const GreyStrip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/element-4.svg"
          width={14}
          height={14}
          alt="element-4-icon"
        />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
      <div className={`${styles.content} ${styles.desktopElement}`}>
        <Image
          src="/element-4.svg"
          width={14}
          height={14}
          alt="desktop-element-4-icon"
        />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
      <div className={`${styles.content} ${styles.desktopElement}`}>
        <Image
          src="/element-4.svg"
          width={14}
          height={14}
          alt="desktop-element-4-icon"
        />
        <span className={styles.text}>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default GreyStrip;
