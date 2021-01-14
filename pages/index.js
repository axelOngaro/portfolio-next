import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <h1>Hi</h1>
        <h1>I'm Axel,</h1>
        <h1>Wed developper,</h1>
        <h1>DevOps</h1>
        <p>Full stack developper / React + Node </p>
        <p> AWS / Kubernetes</p>
        <Button link="/contact" name="Contact me" />
      </div>
    </div>
  );
}
