import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles["about__inner"]}>
          <h2 className={`${styles.title} ${styles["about__title"]}`}>
            About Us
          </h2>
          <div className={styles["about__text"]}>
            <p>
              Practice shows that great sales do not always depend on how much
              you spend on site promotion and advertising campaign. The final
              result depends much more on the correct organization of the
              campaign. We reach maximum efficiency and help to save our
              clients' budgets by using strategic Internet marketing.
            </p>
            <p>
              Define the purpose of promotion - what our client wants to get,
              when the work is done. Conduct marketing Research the market, the
              target audience, the competitive environment. In developing a
              strategy we take into account all the available data.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["expertise__title"]}`}>
          Our Expertise
        </h2>
        <div className={styles["expertise__inner"]}>
          <div className={styles["expertise__info"]}>
            <div className={styles["expertise__info-item"]}>
              BRANDING
              <span style={{ width: "calc(100% - 90%)" }}>90%</span>
            </div>
            <div className={styles["expertise__info-item"]}>
              DESIGN
              <span style={{ width: "calc(100% - 80%)" }}>80%</span>
            </div>
            <div className={styles["expertise__info-item"]}>
              DEVELOPMENT
              <span style={{ width: "calc(100% - 85%)" }}>85%</span>
            </div>
          </div>
          <div className={styles["expertise__text"]}>
            <p>
              Internet marketing strategy includes the creation of an image and
              advertising concept, the development of content strategy,
              distribution of the use of various communication channels.
            </p>
            <p>
              Implement the adopted strategy, monitoring interim results, and
              adjusting future actions to reflect changes. The main goal in this
              process for us is the end result, not following the plans.
            </p>
          </div>
        </div>
        <div className={styles["expertise__items"]}>
          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--design"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>GRAPHIC DESIGN</h4>
            <p className={styles["expretise__item-text"]}>
              Advertising design, package design, labels, leaflets, catalogs,
              development of presentations, design of exhibition stands stands
            </p>
          </div>

          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--dev"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>WEB DEVELOPMENT</h4>
            <p className={styles["expertise__item-text"]}>
              We develop websites from concept to implementation. Design,
              layout, programming and launching the site in the network
            </p>
          </div>

          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--marketing"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>MARKETING</h4>
            <p className={styles["expretise__item-text"]}>
              We develop marketing and advertising promotion of your product or
              service on a turnkey basis and on any budget.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles["magic__inner"]}>
          <h2 className={`${styles.title} ${styles["magic__title"]}`}>
            Let’s make magic.
          </h2>
          <div className={styles["magic__text"]}>
            <p>
              Marketing agency MGN: full range of marketing, advertising and
              design services in Kharkov and Ukraine: marketing research of
              markets, goods, consumers, marketing complex planning,
              advertising, advertising holding advertising campaigns, branding,
              advertising design, pr.
            </p>
            <p>
              We have a lot of experience in real business, in a variety of
              industries - from real estate to pharmacy and medical business. We
              don't just solve our clients' problems, we came out of the
              business environment ourselves and and understand the essence of
              business processes.
            </p>
            <p>We speak the same language as the business!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
