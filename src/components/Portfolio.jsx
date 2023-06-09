import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__top">
          <h2 className="title">Portfolio</h2>
          <div className="portfolio__filter-btn">
            <button className="portfolio__btn" data-filter="all">
              ALL
            </button>
            <button className="portfolio__btn" data-filter=".category-a">
              BRANDING
            </button>
            <button className="portfolio__btn" data-filter=".category-b">
              DESIGN
            </button>
            <button className="portfolio__btn" data-filter=".category-c">
              PHOTOGRAPHY
            </button>
            <button className="portfolio__btn" data-filter=".category-d">
              ILLUSTRATION
            </button>
          </div>
        </div>
      </div>

      <div className="portfolio__content">
        <div className="portfolio__item mix category-a">
          <img src="images/portfolio/1.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-a">
          <img src="images/portfolio/2.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-b">
          <img src="images/portfolio/3.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-b">
          <img src="images/portfolio/4.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-b">
          <img src="images/portfolio/5.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-c">
          <img src="images/portfolio/6.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-c">
          <img src="images/portfolio/7.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-c">
          <img src="images/portfolio/8.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
        <div className="portfolio__item mix category-d">
          <img src="images/portfolio/9.jpg" alt="portfolio images" />
          <a className="portfolio__item-link" href="#">
            SHOW PROJECT
          </a>
        </div>
      </div>

      <a className="portfolio__add" href="#">
        VIEW MORE PROJECTS
      </a>

      <blockquote className="blockquote">
        "It doesn't matter what story you tell, but how it is told."
        <span className="blockquote__author">- Anonymous</span>
      </blockquote>

      <div className="portfolio__video">
        <a href="https://www.youtube.com/watch?v=GYkq9Rgoj8E&ab_channel=Apple">
          <img
            src="images/portfolio/video-thumbnail.jpg"
            alt="video thumbnail"
          />
        </a>
      </div>

      <div className="container">
        <div class="portfolio__numbers">
          <h5 class="portfolio__numbers-item">
            305
            <span>Web Designs</span>
          </h5>
          <h5 class="portfolio__numbers-item">
            220 <span>Logo Designs</span>
          </h5>
          <h5 class="portfolio__numbers-item">
            52
            <span>Print Designs</span>
          </h5>
          <h5 class="portfolio__numbers-item">
            88
            <span>Mobile Apps</span>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
