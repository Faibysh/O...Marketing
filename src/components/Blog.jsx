import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Blog.module.css";
import ArrowLeft from "../images/arrow-left.svg";
import ArrowRight from "../images/arrow-right.svg";
import Design from "../images/blog/design.jpg";
import Siri from "../images/blog/siri.jpg";
import Gif from "../images/blog/gif.gif";
import Color from "../images/blog/color.png";
import Ai from "../images/blog/ai.jpg";
import Web from "../images/blog/web.jpg";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button type="button" className={styles["slick-prev"]}>
        <img src={ArrowLeft} alt="" />
      </button>
    ),
    nextArrow: (
      <button type="button" className={styles["slick-next"]}>
        <img src={ArrowRight} alt="" />
      </button>
    ),
  };

  return (
    <section id="blog" className={styles["slider-blog"]}>
      <div className={styles.container}>
        <Slider {...settings} className={styles["slider-blog__inner"]}>
          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                THE ANIMATED LOGO. TREND OR NECESSITY?
              </h3>
            </a>
            <p className={styles["slider-blog__item-descr"]}>
              What is an animated logo, and what are its benefits? And why is it
              fashionable now? Let's let's discuss.
            </p>
            <img src={Gif} alt="" />
          </div>

          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                The Power of Minimalism in Design
              </h3>
            </a>

            <p className={styles["slider-blog__item-descr"]}>
              Minimalism is a design approach that focuses on simplicity and
              removing unnecessary elements. Discover the power of minimalism in
              design and how it can enhance user experience.
            </p>
            <img src={Design} alt="" />
          </div>

          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                The Importance of Responsive Web Design
              </h3>
            </a>
            <p className={styles["slider-blog__item-descr"]}>
              Responsive web design ensures that websites adapt and provide an
              optimal viewing experience across different devices. Explore the
              importance of responsive design and its impact on user engagement.
            </p>
            <img src={Web} alt="Web design" />
          </div>
          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                The Rise of Voice Assistants and their Impact on User
                Interaction
              </h3>
            </a>
            <p className={styles["slider-blog__item-descr"]}>
              Voice assistants like Siri, Alexa, and Google Assistant have
              transformed the way we interact with technology. Understand the
              rise of voice assistants and how they are reshaping user
              interactions.
            </p>
            <img src={Siri} alt="Siri" />
          </div>
          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                The Psychology of Color in Marketing
              </h3>
            </a>
            <p className={styles["slider-blog__item-descr"]}>
              Colors have a significant impact on consumer behavior and
              perception. Delve into the psychology of color in marketing and
              learn how different colors evoke emotions and influence buying
              decisions.
            </p>
            <img src={Color} alt="Color in Marketing" />
          </div>
          <div className={styles["slider-blog__item"]}>
            <a className={styles["slider-blog__item-link"]} href="#">
              <h3 className={styles["slider-blog__item-title"]}>
                The Future of Artificial Intelligence in Healthcare
              </h3>
            </a>
            <p className={styles["slider-blog__item-descr"]}>
              Artificial intelligence is revolutionizing the healthcare industry
              with its ability to analyze vast amounts of data and improve
              patient care. Discover the potential and future implications of AI
              in healthcare.
            </p>
            <img src={Ai} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
