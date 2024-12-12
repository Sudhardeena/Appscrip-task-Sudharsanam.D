import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={`${styles.group} ${styles.leftgroup}`}>
          <Image
            src="/solar_hamburger-menu-linear.svg"
            width={20}
            height={20}
            alt="solar_hamburger-menu-linear-icon"
          />
          <Image src="/Logo.svg" width={21.1} height={21.1} alt="Logo-icon" />
        </div>
        <h1 className={styles.logoheading}>LOGO</h1>
        <div className={`${styles.group} ${styles.rightgroup}`}>
          <Image
            src="/search-normal.svg"
            width={20}
            height={20}
            alt="search-normal-icon"
          />
          <Image src="/heart.svg" width={20} height={20} alt="heart-icon" />
          <Image
            src="/shopping-bag.svg"
            width={20}
            height={20}
            alt="shopping-bag-icon"
          />
        </div>
      </div>
      <div className={styles.desktopViewLinks}></div>
    </div>
  );
};

export default Navbar;
