import React from "react";
import styles from "./Home.module.css";
import mouse from "../images/mouse.svg";

const Home = () => {
  return (
    <div className={styles["header__content"]}>
      <div className={styles.container}>
        <div className={styles["header__content-inner"]}>
          <h1 className={styles["header__title"]}>O...MARKETING</h1>
          <h4 className={styles["header__subtitle"]}>
            DIGITAL MARKETING AGENCY
          </h4>
          <a
            className={styles["header__icon"]}
            href="https://faibysh.github.io/marketing/"
          >
            <img src={mouse} alt="mouse icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
