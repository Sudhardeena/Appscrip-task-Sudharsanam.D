import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toggler from "./components/Toggler/Toggler";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import PageInfo from "./components/PageInfo/PageInfo";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <PageInfo />
        <Toggler />
        <div className={styles.content}>
          <Sidebar />
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
