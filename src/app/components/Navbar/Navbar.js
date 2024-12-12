import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}></div>
      <div className={styles.desktopViewLinks}></div>
    </div>
  );
};

export default Navbar;
