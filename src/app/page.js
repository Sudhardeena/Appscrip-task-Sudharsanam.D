"use client";
import { useState } from "react";

import { ProductContextProvider } from "./context/ProductContext";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toggler from "./components/Toggler/Toggler";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import PageInfo from "./components/PageInfo/PageInfo";

export default function Page({ initialProducts, intialCategories }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <ProductContextProvider>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <PageInfo />
          <Toggler toggleSidebar={toggleSidebar} />
          <div className={styles.content}>
            {showSidebar && <Sidebar />}
            <ProductList showSidebar={showSidebar} />
          </div>
        </main>
        <Footer />
      </div>
    </ProductContextProvider>
  );
}
