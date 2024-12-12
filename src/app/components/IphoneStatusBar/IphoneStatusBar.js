import React from "react";
import styles from "./IphoneStatusBar.module.css";
import Image from "next/image";

const IphoneStatusBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Image src="/signal.svg" width={21} height={14} alt="signal-icon" />
        <span className={styles.text}>Figma</span>
        <Image src="/Wifi.svg" width={15} height={14} alt="wifi-icon" />
      </div>
      <span className={styles.time}>9:41 AM</span>
      <div className={`${styles.group} ${styles.rightgroup}`}>
        <Image src="/Alarm.svg" width={14} height={14} alt="alarm-icon" />
        <Image
          src="/Bluetooth.svg"
          width={14}
          height={14}
          alt="bluetooth-icon"
        />
        <span className={styles.text}>100%</span>
        <Image
          src="/Battery.svg"
          width={26.5}
          height={11.5}
          alt="battery-icon"
        />
      </div>
    </div>
  );
};

export default IphoneStatusBar;

/* <Image src="/Carrier.svg" width={34} height={16} alt="signal-icon" /> */
