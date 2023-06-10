import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles["portfolio__top"]}>
          <h2 className={styles.title}>Portfolio</h2>
          <div className={styles["portfolio__filter-btn"]}>
            <button className={styles["portfolio__btn"]} data-filter="all">
              ALL
            </button>
            <button
              className={styles["portfolio__btn"]}
              data-filter=".category-a"
            >
              BRANDING
            </button>
            <button
              className={styles["portfolio__btn"]}
              data-filter=".category-b"
            >
              DESIGN
            </button>
            <button
              className={styles["portfolio__btn"]}
              data-filter=".category-c"
            >
              PHOTOGRAPHY
            </button>
            <button
              className={styles["portfolio__btn"]}
              data-filter=".category-d"
            >
              ILLUSTRATION
            </button>
          </div>
        </div>
      </div>

      <div className={styles["portfolio__content"]}>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-a"]}`}
        >
          <img src="images/portfolio/1.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-a"]}`}
        >
          <img src="images/portfolio/2.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src="images/portfolio/3.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src="images/portfolio/4.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src="images/portfolio/5.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src="images/portfolio/6.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src="images/portfolio/7.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src="images/portfolio/8.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-d"]}`}
        >
          <img src="images/portfolio/9.jpg" alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
      </div>

      <a className={styles["portfolio__add"]} href="#">
        VIEW MORE PROJECTS
      </a>

      <blockquote className={styles.blockquote}>
        "It doesn't matter what story you tell, the important thing is to make
        your customer a hero."
        <span className={styles["blockquote__author"]}>Chris Brogan</span>
      </blockquote>

      <div className={styles["portfolio__video"]}>
        <a href="https://www.youtube.com/watch?v=GYkq9Rgoj8E&ab_channel=Apple">
          <img
            src="images/portfolio/video-thumbnail.jpg"
            alt="video thumbnail"
          />
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles["portfolio__numbers"]}>
          <h5 className={styles["portfolio__numbers-item"]}>
            305
            <span>Web Designs</span>
          </h5>
          <h5 className={styles["portfolio__numbers-item"]}>
            220 <span>Logo Designs</span>
          </h5>
          <h5 className={styles["portfolio__numbers-item"]}>
            52
            <span>Print Designs</span>
          </h5>
          <h5 className={styles["portfolio__numbers-item"]}>
            88
            <span>Mobile Apps</span>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
