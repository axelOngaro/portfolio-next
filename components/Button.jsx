import React from "react";
import styles from "./Navbar.module.css";

export default function Button(props) {
  const { name, link } = props;
  return (
    <div className={styles.button}>
      <a href={link}>{name}</a>
    </div>
  );
}
