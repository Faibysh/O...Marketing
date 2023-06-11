import styles from "./Expertise.module.css";

const Expertise = () => {
  return (
    <section className={styles.expertise} id="expertise">
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
              In an Internet marketing strategy, we create an image and
              advertising concept, develop a content strategy, and leverage
              diverse communication channels for distribution purposes.
            </p>
            <p>
              We prioritize the desired end result in implementing the strategy,
              adjusting future actions based on interim results and changes,
              rather than rigidly following predefined plans.
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
    </section>
  );
};

export default Expertise;
