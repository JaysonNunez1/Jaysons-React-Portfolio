/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I am Jayson</h1>
          <p className={styles.description}>
            I am a full-stack dev with 1 year experience using React and NodeJs.
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
   
         <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
