import React from "react";
import styles from "./Toggler.module.css";
import Image from "next/image";
import SortDropdown from "../SortDropdown/SortDropdown";

const Toggler = () => {
  return (
    <div className={styles.togglerContainer}>
      <div className={styles.filterContainer}>
        <h2 className={styles.filterToggler}>Filter</h2>
      </div>
      <Image
        src="public/Line 14.svg"
        width={1}
        height={30}
        className={styles.togglersSeparator}
        alt="Line 14 Toggler seperator"
      />

      <div className={styles.sortContainer}>
        <SortDropdown />
      </div>
    </div>
  );
};

export default Toggler;

/* <span className={styles.togglersSeparator}>|</span> */
