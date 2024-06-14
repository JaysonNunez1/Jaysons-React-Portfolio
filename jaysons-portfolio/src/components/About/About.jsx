/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
      <div className={styles.aboutItemText}>
              <h3>Frontend Dev</h3>
              <p>
                Frontend developer with experience in building responsive
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
              <h3>Backend Dev</h3>
              <p>
                I have experience developing fast and optimised back-end systems
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
