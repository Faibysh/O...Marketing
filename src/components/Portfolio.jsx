import React from "react";
import styles from "./Portfolio.module.css";
import photo from "../images/portfolio/1.jpg";
import photo2 from "../images/portfolio/2.jpg";
import photo3 from "../images/portfolio/3.jpg";
import photo4 from "../images/portfolio/4.jpg";
import photo5 from "../images/portfolio/5.jpg";
import photo6 from "../images/portfolio/6.jpg";
import photo7 from "../images/portfolio/7.jpg";
import photo8 from "../images/portfolio/8.jpg";
import photo9 from "../images/portfolio/9.jpg";
import play from "../images/play.svg";

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
          <img src={photo} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-a"]}`}
        >
          <img src={photo2} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src={photo3} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src={photo4} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-b"]}`}
        >
          <img src={photo5} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src={photo6} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src={photo7} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-c"]}`}
        >
          <img src={photo8} alt="portfolio images" />
          <a className={styles["portfolio__item-link"]} href="#">
            SHOW PROJECT
          </a>
        </div>
        <div
          className={`${styles["portfolio__item"]} mix ${styles["category-d"]}`}
        >
          <img src={photo9} alt="portfolio images" />
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
          <img src={play} alt="play" />
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
