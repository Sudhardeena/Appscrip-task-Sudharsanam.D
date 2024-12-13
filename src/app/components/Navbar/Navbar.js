import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

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
            className={styles.menuIcon}
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
          <Image
            src="/profile.svg"
            width={24}
            height={24}
            alt="profile-icon"
            className={styles.desktopOnlyIcon}
          />
          <Image
            src="/Language.svg"
            width={52}
            height={16}
            alt="Language-icon"
            className={styles.desktopOnlyIcon}
          />
        </div>
      </div>
      <div className={styles.desktopViewLinksContainer}>
        <Link className={styles.desktopViewLinks} href="">
          SHOP
        </Link>
        <Link className={styles.desktopViewLinks} href="">
          SKILLS
        </Link>
        <Link className={styles.desktopViewLinks} href="">
          STORIES
        </Link>
        <Link className={styles.desktopViewLinks} href="">
          ABOUT
        </Link>
        <Link className={styles.desktopViewLinks} href="">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
