import React from "react";
import styles from "./Header.module.css";

import IphoneStatusBar from "../IphoneStatusBar/IphoneStatusBar";
import GreyStrip from "../GreyStrip/GreyStrip";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <IphoneStatusBar />
      <GreyStrip />
      <Navbar />
    </div>
  );
};

export default Header;
