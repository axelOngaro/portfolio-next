import React from "react";
import Navbar from "../components/Navbar";

export default function skills() {
  return (
    <div>
      <Navbar />
      <h1>Skills page</h1>
      <h2>Front end</h2>
      <ul>
        <li>HTML</li>
        <li>CSS/SASS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
      <h2>Back end</h2>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>Redux</li>
        <li>NextJS</li>
      </ul>
      <h2>Databases</h2>
      <ul>
        <li>SQL => Postgres</li>
        <li>NoSQL => MongoDB</li>
      </ul>
      <h2>DevOps and other tools</h2>
      <ul>
        <li>Git/Github</li>
        <li>AWS</li>
        <li>CI/CD with Jenkis/Travis</li>
        <li>Nginx</li>
        <li>Docker</li>
        <li>Kubernetes</li>
      </ul>
      <h2>Design tools</h2>
      <ul>
        <li>Figma</li>
        <li>Photoshop</li>
        <li>Lightrooms</li>
      </ul>
      <h2>Other languages/competences</h2>
      <ul>
        <li>python</li>
        <li>C</li>
      </ul>
    </div>
  );
}
