"use client";
import { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending

  useEffect(() => {
    async function fetchData() {
      const productRes = await fetch("https://fakestoreapi.com/products");
      const categoryRes = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const productData = await productRes.json();
      const categoryData = await categoryRes.json();

      setProducts(productData);
      setCategories(categoryData);
    }

    fetchData();
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Sort products based on price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <ProductContext.Provider
      value={{
        products: sortedProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
