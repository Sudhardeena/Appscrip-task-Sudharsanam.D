import React from "react";
import styles from "./SortDropdown.module.css";
import Image from "next/image";

const SortDropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectElement}>
        <h2 className={styles.selectedElement}>RECOMMENDED</h2>
        <Image
          src="arrow-left.svg"
          width={16}
          height={16}
          alt="arrow-left sort dropdown icon"
          className={styles.dropdownIcon}
        />
      </div>
    </div>
  );
};

export default SortDropdown;
