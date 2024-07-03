import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Azelmad</h1>
        <p className={styles.description}>
          Recently graduated as a web developer, I'm now stepping into the world
          of web development, proficient in React, Laravel, and Node.js. Reach
          out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgCollecter}>
        <img
          src={getImageUrl("hero/azelmad2.jpg")}
          // src={getImageUrl("hero/azelmad2.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
