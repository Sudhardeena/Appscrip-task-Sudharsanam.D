"use client";

import React from "react";
import styles from "./ProductList.module.css";
import { useContext } from "react";
import ProductContext from "@/app/context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({ showSidebar }) => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  return (
    <ul className={styles.productList}>
      {products.map((productDetails) => (
        <ProductCard
          key={productDetails.id}
          productDetails={productDetails}
          showSidebar={showSidebar}
        />
      ))}
    </ul>
  );
};

export default ProductList;
