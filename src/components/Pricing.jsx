import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["pricing__title"]}`}>
          Pricing Plans
        </h2>
        <div className={styles["pricing__items"]}>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Basic</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>290
            </li>
            <li>1 Logo Design</li>
            <li>1 Website Design</li>
            <li>1 Domain Free</li>
            <li>3 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Starter</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>500
            </li>
            <li>2 Logo Design</li>
            <li>2 Website Design</li>
            <li>1 Domain Free</li>
            <li>6 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Professional</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>1500
            </li>
            <li>3 Logo Design</li>
            <li>3 Website Design</li>
            <li>2 Domain Free</li>
            <li>12 Month License</li>
            <li>2 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
