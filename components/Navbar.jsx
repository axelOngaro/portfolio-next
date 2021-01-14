import React from "react";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.brand__name}>
        <a href="/">Axel Ongaro</a>
      </div>
      <nav className={styles.nav__links}>
        <ul>
          <li className={styles.link}>
            <a href="/">Home</a>
          </li>
          <li className={styles.link}>
            <a href="/contact">Contact</a>
          </li>
          <li className={styles.link}>
            <a href="/skills">Skills</a>
          </li>
          <li className={styles.link}>
            <a href="/aboutMe">About me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
