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
    </section>
  );
};

export default About;
