import React from "react";
import styles from "../styles/Button.module.css";

export default function Button(props) {
  const { name, link } = props;
  return (
    <div className={styles.button}>
      <span>
        <a href={link}>{name}</a>
      </span>
    </div>
  );
}
