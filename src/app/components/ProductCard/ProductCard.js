import React from "react";
import styles from "./Product.module.css";
import Image from "next/image";

const ProductCard = ({ productDetails, showSidebar }) => {
  const { title, image } = productDetails;
  //   console.log(showSidebar);
  return (
    <li
      className={`${styles.container} ${
        showSidebar ? styles.sidebarActive : ""
      }`}
    >
      <img
        src={image}
        alt={`${title} thumbnail image`}
        className={styles.productImage}
      />
      <div className={styles.productInfoContainer}>
        <div className={styles.productTitleContainer}>
          <h2 className={styles.productTitle}>{title}</h2>
          <Image
            src="/heart.svg"
            className={styles.mobileHeartIcon}
            width={16}
            height={16}
            alt="heart.svg icon"
          />
        </div>
        <div className={styles.productDescContainer}>
          <p className={styles.productDesc}>
            <span className={styles.signInText}>Sign in</span> or Create an
            account to see pricing
          </p>
          <Image
            src="/heart.svg"
            className={styles.desktopHeartIcon}
            width={24}
            height={24}
            alt="heart.svg icon"
          />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
