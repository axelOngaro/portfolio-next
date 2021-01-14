import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <MainContent />
      </main>
    </div>
  );
}
