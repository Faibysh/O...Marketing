import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
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
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const portfolioItems = [
    { image: photo, category: "category-a" },
    { image: photo2, category: "category-a" },
    { image: photo3, category: "category-b" },
    { image: photo4, category: "category-b" },
    { image: photo5, category: "category-b" },
    { image: photo6, category: "category-c" },
    { image: photo7, category: "category-c" },
    { image: photo8, category: "category-c" },
    { image: photo9, category: "category-d" },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const transitions = useTransition(filteredItems, {
    from: { opacity: 0, transform: "translate3d(0, 50%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles["portfolio__top"]}>
          <h2 className={styles.title}>Portfolio</h2>
          <div className={styles["portfolio__filter-btn"]}>
            <button
              className={styles["portfolio__btn"]}
              onClick={() => handleFilter("all")}
            >
              ALL
            </button>
            <button
              className={styles["portfolio__btn"]}
              onClick={() => handleFilter("category-a")}
            >
              BRANDING
            </button>
            <button
              className={styles["portfolio__btn"]}
              onClick={() => handleFilter("category-b")}
            >
              DESIGN
            </button>
            <button
              className={styles["portfolio__btn"]}
              onClick={() => handleFilter("category-c")}
            >
              PHOTOGRAPHY
            </button>
            <button
              className={styles["portfolio__btn"]}
              onClick={() => handleFilter("category-d")}
            >
              ILLUSTRATION
            </button>
          </div>
        </div>
      </div>

      <div className={styles["portfolio__content"]}>
        {transitions((style, item, t, index) => (
          <animated.div
            key={index}
            className={`${styles["portfolio__item"]} mix ${
              styles[item.category]
            }`}
            style={style}
          >
            <img src={item.image} alt="portfolio images" />
            <a className={styles["portfolio__item-link"]} href="#">
              SHOW PROJECT
            </a>
          </animated.div>
        ))}
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
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=GYkq9Rgoj8E&ab_channel=Apple"
        >
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
