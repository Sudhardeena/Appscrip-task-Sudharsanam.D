import React from "react";
import styles from "./Header.module.css";

import IphoneStatusBar from "../IphoneStatusBar/IphoneStatusBar";
import GreyStrip from "../GreyStrip/GreyStrip";

const Header = () => {
  return (
    <div className={styles.header}>
      <IphoneStatusBar />
      <GreyStrip />
    </div>
  );
};

export default Header;
