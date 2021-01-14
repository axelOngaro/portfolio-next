import React from "react";
import Button from "../components/Button";
import styles from "../styles/MainContent.module.css";

export default function MainContent() {
  return (
    <div className={styles.content}>
      <h1>Hi</h1>
      <h1>I'm Axel,</h1>
      <h1>Wed developper,</h1>
      <h1>DevOps</h1>
      <p>Full stack developper / React + Node </p>
      <p> AWS / Kubernetes</p>
      <Button link="/contact" name="Contact me" />
    </div>
  );
}
